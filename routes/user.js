const { Router } = require("express");
const router = Router();
const User = require("../model/user");

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = User.matchPassword;
  console.log("user", user);
  return res.redirect("/");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log(fullName);
  console.log(email);
  console.log(password);
  await User.create({ fullName, email, password });
  return res.redirect("/");
});

module.exports = router;
