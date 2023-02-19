const express = require("express");
const app = express();
//const path = require('path')

const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views");

app.get("/home", (req, res) => {
  res.render("home", { title: "home page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about page" });
});

app.get("/work", (req, res) => {
  res.render("work", { title: " works page" });
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("server started at 3000");
});
