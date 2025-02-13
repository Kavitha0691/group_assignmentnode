import dotenv from "dotenv";
import express from "express";
import * as path from "path";
import { allAnimals } from "./data/animals.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 3030;
const app = express();

//Home site, landing page.
app.get("/", (req, res) => {
  res.render("pages/home", {
    allAnimals: allAnimals
  });
});
//Routing Here

//Setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

//Listen
app.listen(PORT, () =>
  console.log(`Starting server, listening on port http://localhost:${PORT}`)
);
