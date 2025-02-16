import express from "express";
import { reptiles } from "../data/animals.js"

const app = express();
const reptilesRouter = express.Router();

reptilesRouter.get("/", (req,res) => {
    res.render("pages/animal-page", {
        headTitle: "Group Assignment",
        title: "Reptiles",
        pageType: "home",
        allAnimals: reptiles,
   })    
})

reptiles.forEach((reptile) => {
reptilesRouter.get(`/${reptile.name.replaceAll(" ", "").toLowerCase()}`,(req,res) => {
    res.render("pages/animal-page", {
        headTitle: reptile.name,
        title: reptile.name,
        allAnimals: reptile,    
    });
  }); 
});

app.use("/reptiles", reptilesRouter);

export default reptilesRouter

