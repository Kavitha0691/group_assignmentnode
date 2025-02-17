import express from "express";
import {mammals} from "../data/animals.js";

const mammalsRouter = express.Router();
const app = express();

mammalsRouter.get("/", (req, res) => {
    res.render("pages/animal-page", {
      headTitle: "Group-AssignmentNode",
      title: "mammals",
      typePage: "home",
      description: "Mammals are a group of animals that are found in the . They are a type of animal that can fly. They are a type of animal that can fly. They are a type of animal that can fly.",
      animals: mammals,
    });
  });
   
  mammals.forEach((mammal) => {
    mammalsRouter.get(`/${mammal.slug}`, (req, res) => {
      res.render("pages/animal-page", {
        headTitle: mammal.name,
        title: mammal.name,
        animals: mammals,
        animalData: mammal,
      });
    });
  });
   
  app.use("/mammals", mammalsRouter);
   
  export default mammalsRouter;