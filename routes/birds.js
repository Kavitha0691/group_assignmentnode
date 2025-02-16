import express from "express";
import { birds } from "../data/animals.js";

const birdsRouter = express.Router();
const app = express();

birdsRouter.get("/", (req, res) => {
  res.render("pages/animal-page", {
    headTitle: "Group-AssignmentNode",
    title: "Birds",
    typePage: "home",
    description: "Birds are a group of animals that are found in the sky. They are a type of animal that can fly. They are a type of animal that can fly. They are a type of animal that can fly.",
    animals: birds,
  });
});

birds.forEach((bird) => {
  birdsRouter.get(`/${bird.slug}`, (req, res) => {
    res.render("pages/animal-page", {
      headTitle: bird.name,
      title: bird.name,
      animals: birds,
      animalData: bird,
    });
  });
});

app.use("/birds", birdsRouter);

export default birdsRouter;
