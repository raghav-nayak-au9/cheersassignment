const express = require("express");
const app = express();
const cors = require("cors");
const movieRoute = require("../Route/route");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", movieRoute);

app.listen(8080);
