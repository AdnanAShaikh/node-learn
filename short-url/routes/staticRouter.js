const express = require("express");
const URL = require("../model/url");

const router = express.Router();

router.get("/home", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    url: allUrls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
