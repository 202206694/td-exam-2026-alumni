const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE = "/data/storage.db";

// ---------------------
// Read DB safely
// ---------------------
function readDB() {
  try {
    if (!fs.existsSync(FILE)) return [];
    return fs.readFileSync(FILE, "utf-8")
      .split("\n")
      .filter(Boolean);
  } catch (err) {
    console.error("Error reading DB:", err);
    return [];
  }
}

// ---------------------
// Write DB safely
// ---------------------
function writeDB(lines) {
  try {
    fs.writeFileSync(FILE, lines.join("\n"));
  } catch (err) {
    console.error("Error writing DB:", err);
    throw err; // propagate so route can handle it
  }
}

// ---------------------
// GET user profile
// ---------------------
app.get("/user-profile/:id", (req, res) => {
  try {
    const id = req.params.id;
    const lines = readDB();

    console.log(`Storage received request for user ${id}`);
    console.log(`Storage DB: ${lines}`);

    for (let line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj.userid === id) {
          return res.json(obj);
        }
      } catch (err) {
        console.error("Corrupted DB line:", line);
      }
    }

    return res.status(404).send("User not found");

  } catch (err) {
    console.error("GET /user-profile failed:", err);
    return res.status(500).send("Internal server error");
  }
});

// ---------------------
// POST user profile
// ---------------------
app.post("/user-profile/:id", (req, res) => {
  try {
    const id = req.params.id;
    const lines = readDB();

    console.log(`Storage received request to create/update user ${id}`);
    console.log(`Storage DB: ${lines}`);

    for (let line of lines) {
      try {
        const obj = JSON.parse(line);
        if (obj.userid === id) {
          return res.status(400).json({ message: "User already exists" });
        }
      } catch (err) {
        console.error("Corrupted DB line:", line);
      }
    }

    const profile = {
      userid: id,
      name: req.body.name,
      age: req.body.age
    };

    lines.push(JSON.stringify(profile));
    writeDB(lines);

    return res.json({ message: "User created" });

  } catch (err) {
    console.error("POST /user-profile failed:", err);
    return res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => console.log("Storage running on 3000"));