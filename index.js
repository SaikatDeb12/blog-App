const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const useRoute = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/user", useRoute);
app.listen(PORT, () => console.log(`server started at ${PORT}`));
