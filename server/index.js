const express = require("express");
const chalk = require("chalk");
const path = require("path");
const router = require("./router");

const app = express();

const staticFiles = path.join(__dirname, "../client");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(staticFiles));

app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(chalk.blue(`server listen at http://localhost:${port}`));
});
