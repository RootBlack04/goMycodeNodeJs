const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const userM = require("./Model/connection2");
const port = process.env.PORT;

//API ENDPOINT
// get request /

app.get("/", (req, res) => {
  res.status(200).send("<h1> Home Page </h1>");
});

app.post("/creat", (req, res) => {
  userM
    .create(req.body)
    .then((result) => {
      res.status(200).json({ message: " user has been created!" });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

app.listen(port, () => {
  console.log(`you app is running on http://127.0.0.1:${port}`);
});
