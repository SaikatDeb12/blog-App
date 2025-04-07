const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

app.set("view engine", ejs);
app.set("views", path.resolve("./views"));
app.listen(PORT, () => console.log(`server started at ${PORT}`));
