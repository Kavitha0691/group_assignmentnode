import express from "express";
import { birds } from "../data/animals.js";

const birdsRouter = express.Router();
const app = express();

birdsRouter.get("/", (req, res) => {
  res.render("pages/animal-page", {
    headTitle: "Group-AssignmentNode",
    title: "Birds",
    typePage: "home",
    animalData: birds,
  });
});

birds.forEach((bird) => {
  birdsRouter.get(`/${bird.name.trim().toLowerCase()}`, (req, res) => {
    res.render("pages/animal-page", {
      headTitle: bird.name,
      title: bird.name,
      animalData: bird,
    });
  });
});

app.use("/birds", birdsRouter);

export default birdsRouter;
