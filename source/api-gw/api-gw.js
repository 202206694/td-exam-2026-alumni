const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const ROUTER_URL = "http://svc-router:3000";

// ---------------------
// GET user
// ---------------------
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const routerResp = await axios.post(`${ROUTER_URL}/user/${id}`);

    const host = routerResp.data.storageHost;
    const port = routerResp.data.port;

    console.log(`Router assigned user ${id} to ${host}:${port}`);

    const storageResp = await axios.get(
      `http://${host}:${port}/user-profile/${id}`
    );

    res.json(storageResp.data);

  } catch (err) {
    //console.error(err);
    res.status(500).send(err.toString());
  }
});

// ---------------------
// POST user
// ---------------------
app.post("/user/:id", async (req, res) => {
  const id = req.params.id;
  const profile = req.body;

  try {
    const routerResp = await axios.post(`${ROUTER_URL}/user/${id}`);

    const host = routerResp.data.storageHost;
    const port = routerResp.data.port;

    console.log(`Router assigned user ${id} to ${host}:${port}`);

    const storageResp = await axios.post(
      `http://${host}:${port}/user-profile/${id}`,
      profile
    );

    res.json(storageResp.data);

  } catch (err) {
    //console.error(err);
    res.status(500).send(err.toString());
  }
});

app.listen(3000, () => console.log("API Gateway running on 3000"));