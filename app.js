const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const db = require("./models/db");

const api = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/banks", api.banks);

const { PORT } = process.env;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((e) => {
  console.log(`Errore: ${e.message}`);
});

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res
    .status(status)
    .json({ status: "fail", code: status, message: err.message });
});
