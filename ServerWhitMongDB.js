const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`you app is running on http:127.0.0.1:${port}`);
});
