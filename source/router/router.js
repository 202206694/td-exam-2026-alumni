const express = require("express");
const fs = require("fs");
const dns = require("dns").promises;

const app = express();
app.use(express.json());

const FILE = "/data/router.db";
const STORAGE_SERVICE = "svc-storage";
const NAMESPACE = "default";
const PORT = 3000;

// ---------------------
// DB helpers (safe)
// ---------------------
function readDB() {
  try {
    if (!fs.existsSync(FILE)) return {};

    const lines = fs.readFileSync(FILE, "utf-8").split("\n").filter(Boolean);
    const map = {};

    for (const line of lines) {
      try {
        const [id, index] = line.split(" ");

        if (!id || index === undefined) continue;

        const parsed = parseInt(index, 10);
        if (isNaN(parsed)) continue;

        map[id] = parsed;
      } catch (err) {
        console.error("Skipping corrupted line:", line);
      }
    }

    return map;
  } catch (err) {
    console.error("readDB failed:", err);
    return {};
  }
}

function writeDB(map) {
  try {
    const lines = Object.entries(map).map(
      ([id, index]) => `${id} ${index}`
    );

    fs.writeFileSync(FILE, lines.join("\n"));
  } catch (err) {
    console.error("writeDB failed:", err);
    throw err;
  }
}

// ---------------------
// DNS discovery (safe)
// ---------------------
async function getStorageReplicaCount() {
  try {
    console.log(`Resolving storage service ${STORAGE_SERVICE}`);

    const addresses = await dns.resolve4(
      `${STORAGE_SERVICE}.${NAMESPACE}.svc.cluster.local`
    );

    console.log(`Storage pod IPs: ${addresses}`);

    return addresses.length;
  } catch (err) {
    console.error("DNS resolution failed:", err);
    return 0;
  }
}

// ---------------------
// Build FQDN
// ---------------------
function buildStorageHost(index) {
  return `sts-storage-${index}.${STORAGE_SERVICE}.${NAMESPACE}.svc.cluster.local`;
}

// ---------------------
// Main route (fully safe)
// ---------------------
app.post("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Router received request for user ${id}`);

    let db = readDB();

    // ---------------------
    // Existing user
    // ---------------------
    if (db[id] !== undefined) {
      const index = db[id];
      const host = buildStorageHost(index);

      console.log(`User ${id} already assigned to ${host}`);

      return res.json({
        storageHost: host,
        port: PORT
      });
    }

    // ---------------------
    // New user
    // ---------------------
    const replicaCount = await getStorageReplicaCount();

    if (replicaCount === 0) {
      return res.status(500).send("No storage replicas available");
    }

    // count usage per index
    const counts = new Array(replicaCount).fill(0);

    Object.values(db).forEach(idx => {
      if (typeof idx === "number" && idx < replicaCount) {
        counts[idx]++;
      }
    });

    // choose least loaded
    let selectedIndex = 0;
    for (let i = 1; i < replicaCount; i++) {
      if (counts[i] < counts[selectedIndex]) {
        selectedIndex = i;
      }
    }

    db[id] = selectedIndex;
    writeDB(db);

    const host = buildStorageHost(selectedIndex);

    console.log(
      `Assigned user ${id} to storage index ${selectedIndex} (${host})`
    );

    return res.json({
      storageHost: host,
      port: PORT
    });

  } catch (err) {
    console.error("Router request failed:", err);
    return res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => console.log("Router running on 3000"));