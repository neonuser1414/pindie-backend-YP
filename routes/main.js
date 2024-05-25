
// routes/main.js
const mainRoute = require("express").Router();
const fs = require("fs").promises;

mainRoute.get("/", (req, res) => {
  // res.send('Скоро здесь будет контент!');
  fs.readFile("./public/index.html", "utf-8").then((data) => {
    res.header("Content-Type", "text/html").send(data);
  });
});

module.exports = mainRoute;
