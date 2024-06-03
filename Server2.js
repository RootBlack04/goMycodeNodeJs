// import Express & dotenv
const fs = require("fs");
const nodemailer = require("nodemailer");

const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const keyValue = process.env.API_KEY;

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());

// ============ NodeMail =============================

const userMail = process.env.MAIL;

const Transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: userMail,
    pass: process.env.MAIL_PASS,
  },
});

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
  } else {
    next();
  }
};

app.use("/api", apiSecured);

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
/* 
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
*/

app.get("/api/users/postuser", (req, res) => {
  res.status(200).json({ message: "we are waiting for you POST" });
});

app.post("/api/users/postuser", (req, res) => {
  const { username, email } = req.body;
  let content = `hello \n username : ${username} \n E-mail : ${email}`;
  createFile(username, content);

  res.status(200).json({ mes: "File has been created!" });
});

/*  

---- fetch test --
fetch("http://127.0.0.1:7500/api/users/postuser?apikey=test123", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "Abdallah", email: "abdallah@gmail.com" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

*/

// fetch post

// function for File
function createFile(nameFile, content) {
  fs.writeFile(nameFile + ".txt", content, (err) => {
    if (err) throw err;
    console.log("File has been created!(Fs)");
  });
}

// use view engine

app.get("/myapp1/home", (req, res) => {
  res.render("home");
});
app.get("/myapp1/contact", (req, res) => {
  res.render("contact");
});
//========== NodeMail ================
// ======== Via Text =============
/* 
app.get("/mailtest", (req, res) => {
  Transport.sendMail({
    sender: userMail,
    bcc: process.env.EMAILTO,
    subject: "Test E-amil send",
    text: "test test test test test",
  })
  .then((data) => res.status(200).json({ msg: "email sent" }))
  .catch((error) => res.status(500).json({ msg: "not work" }));
});
*/
// ======== Via html file =============
app.get("/testmailfs", (req, res) => {
  fs.readFile("emailtampalte.html", "utf8", (err, data) => {
    if (!err) {
      Transport.sendMail({
        from: userMail,
        bcc: process.env.EMAILTO,
        subject: "Test Email Send FS",
        html: data,
      })
        .then(() => res.status(200).json({ msg: "email sent" }))
        .catch((error) => {
          console.error(error);
          res.status(500).json({ msg: "not work" });
        });
    } else {
      console.error(err);
      res.status(500).json({ msg: "Fs error" });
    }
  });
});

//=======================================
//=======================================
// import connection from ".connection/Model/connection.js";
const connection = require("./Model/connection");
//=======================================
connection.connect();
app.get("/product", (req, res) => {
  connection.query(
    "INSERT INTO products(lIbelle, price, description, stock, couleur) VALUES(?,?,?,?,?)",
    ["test001", 125.05, "tetttt", 10, "black"],
    (err, rows) => {
      if (err) {
        res.status(500).json({ msg: "error" });
      } else {
        res.status(200).json({ msg: "insert Product" });
      }
    }
  );
});

// app.get("/prouctdelet",(req,res)=> {
//   connection.connect();
//   connection.query("")
// })

//===================RestAPI ==================================

const connectionbackend = require("./Model/connetionbackend");
const { error } = require("console");
connectionbackend.connect();

// get
app.get("/backendu-users", (req, res) => {
  const query = "select * from  user";
  connectionbackend.query(query, (err, rows) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.status(500).json({ message: "Error" });
    }
  });
});
// get + params
app.get("/backendu-users/:id", (req, res) => {
  const id = req.params.id;
  const query = "select * from  user where id=?";
  connectionbackend.query(query, [id], (err, row) => {
    if (!err) {
      res.status(200).json(row);
    } else {
      res.status(500).json({ message: "Error" });
    }
  });
});

// ==================================================
// app.use(express.json()); // for parsing application/json
//=============================================================
//===========================================================================
// Post
app.post("/backendu-users/create-user", (req, res) => {
  const { username, email, password, ville } = req.body;
  const query =
    "insert into user(username,email,password,ville) values(?,?,?,?)";
  connectionbackend.query(
    query,
    [username, email, password, ville],
    (err, result) => {
      if (!err) {
        res.status(201).json({ msg: "User Created" });
      } else {
        console.log(err); // Log the error
        res.status(500).json({ message: "Error", error: err });
      }
    }
  );
});

// fetch("http://127.0.0.1:7500/backendu-users/create-user", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: "Abdo",
//     email: "abdo@me.com",
//     password: "asdsa5343",
//     ville: "Marrrakech",
//   }),
// });
//==================================================================================
// Delete

app.delete("/backendu-users/delete-user/:id", (req, res) => {
  const id = req.params.id;
  const query = "delete from user where id=?";
  connectionbackend.query(query, [id], (err) => {
    if (!err) {
      res.status(201).json({ message: "User Delete" });
    } else {
      res.status(500).json({ message: "Error" });
    }
  });
});
//============================================================================
// put
app.put("/backendu-users/edit-user/:id", (req, res) => {
  const id = req.params.id;
  const { username, email, password, ville } = req.body;
  const query =
    "update user set username=? , email=? , password=? , ville=? where id=?";
  connectionbackend.query(
    query,
    [username, email, password, ville, id],
    (err) => {
      if (!err) {
        res.status(200).json({ message: "User info was updated sucessfully" });
      } else {
        res.status(500).json({ message: "Erro", error: err });
      }
    }
  );
});
//====================================================================
app.patch("/backendu-users/edit-user-username/:id", (req, res) => {
  const id = req.params.id;
  const { username } = req.body;
  const query = "update user set username=? where id=?";
  connectionbackend.query(query, [username, id], (err) => {
    if (!err) {
      res
        .status(200)
        .json({ message: `User name was updated sucessfully to ${username} ` });
    } else {
      res.status(500).json({ message: "Erro", error: err });
    }
  });
});

app.listen(port, () => {
  //console.log(userMail, process.env.EMAILTO);
  console.log(`you app is running on http:127.0.0.1:${port}`);
});
