const http = require("http");
const fs = require("fs");

const Server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.writeHead(404, "Ok Bro ");
      res.end(JSON.stringify({ id: 1, username: "rootblack" }));
      break;
    case "/home":
      fs.readFile("./Pages/home.html", (err, data) => {
        if (!err) {
          res.end(data.toString());
        } else {
          res.end("Home Page not Found");
        }
      });
      break;
    case "/about":
      fs.readFile("./Pages/about.html", (err, data) => {
        if (!err) {
          res.end(data.toString());
        } else {
          res.end("About Page not Found");
        }
      });
      break;
    case "/contact":
      fs.readFile("./Pages/contact.html", (err, data) => {
        if (!err) {
          res.end(data.toString());
        } else {
          res.end("Contact Page not Found");
        }
      });
      break;
    default:
      res.end("<h1>Page not found </h1>");

      break;
  }
});

Server.listen(8000, () => {
  console.log("the server is running on http://localhost:8000");
});
