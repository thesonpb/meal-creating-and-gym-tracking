import express from "express";
import bodyParser from "body-parser";
import calculatorRouter from "./routes/calculator.js";
import gymRouter from "./routes/gym.js";
import router from "./routes/main.js";
import path from "path";

import db from "./config/database.js";

db.authenticate()
  .then(() => console.log("Connected to database..."))
  .catch((error) => console.log("Error: ", error));

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.set("view engine", "ejs");
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/")));

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", router);
app.use("/calculator", calculatorRouter);
app.use("/gym", gymRouter);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
