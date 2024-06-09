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
app.get("/users", (req, res) => {
  userM
    .find()
    .then((data) => res.status(200).json(data))
    .catch((error) =>
      res.status(500).json({ message: "Internal server Error" })
    );
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  userM
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: "Invalid Id" }));
});

//  Post request /
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

// Update / Put request
app.put("/users/edit/:id", (req, res) => {
  // get id user
  const id_user = req.params.id;
  // get body req
  const newData = req.body;
  userM
    .findByIdAndUpdate(id_user, newData)
    .then(() => {
      res.json({ message: "User Update" });
      console.log("update Ok");
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

// Delete request
app.delete("/users/delete/:id", (req, res) => {
  const { id } = req.params;

  userM
    .findByIdAndDelete(id)
    .then(() => {
      res.json({ message: "User Delete" });
      console.log("delete Ok");
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

app.listen(port, () => {
  console.log(`you app is running on http://127.0.0.1:${port}`);
});
