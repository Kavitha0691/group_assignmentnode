import express from 'express';
import dotenv from "dotenv";
import * as path from "path";
import reptilesRouter from "./routes/reptiles.js";
import { allAnimals } from "./data/animals.js";
import birdsRouter from './routes/birds.js';

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
app.use("/birds",birdsRouter);
app.use ("/reptiles", reptilesRouter);
//Setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

//Listen
app.listen(PORT, () =>
  console.log(`Starting server, listening on port http://localhost:${PORT}`)
);
