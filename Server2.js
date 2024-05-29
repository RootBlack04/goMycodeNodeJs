// import Express & dotenv

const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const keyValue = process.env.API_KEY;

const app = express();

// Middleware

const checkLink = (req, res, next) => {
  const apikey = req.query.apikey;
  if (apikey) {
    next();
  } else {
    res.status(403).json({ message: "Apikey Not Found" });
  }
};
app.use("/api/users", checkLink);


//------------------------------------------------------------------------------------------------
const apiSecured = (req, res, next) => {
  const apikey = req.query.apikey;
  

  if (!apikey) {
    res.status(401).json({ message: "apikey Query not Found" });
  } else if (apikey !== keyValue) {
    res.status(401).json({ message: "Incorrect Api key value" });
  }else{
    next()
  }
};


app.use("/api",apiSecured)





// get request /

app.get("/", (req, res) => {
  res.status(200).send("<h1> Home Page </h1> <p>Slam</p> ");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});
app.get("/api/test", (req, res) => {
  const userApi = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ];

  res.status(200).json(userApi);
});

app.get("/api/users", (req, res) => {
  let users = [
    {
      id: 1,
      username: "karim",
    },
    {
      id: 2,
      username: "sarim",
    },
    {
      id: 3,
      username: "hamid",
    },
    {
      id: 4,
      username: "Najib",
    },
  ];
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  let users = [
    {
      id: 1,
      username: "karim",
    },
    {
      id: 2,
      username: "sarim",
    },
    {
      id: 3,
      username: "hamid",
    },
    {
      id: 4,
      username: "Najib",
    },
  ];

  let apiId = req.params.id;
  const idFind = users.find((el) => el.id === +apiId);

  if (!idFind) {
    res.status(404).json({ message: "DATA NOT FOUND" });
  } else {
    res.status(200).json(idFind);
  }
});

app.listen(port, () => {
  console.log(`yout app is running on http:127.0.0.1:${port}`);
});
