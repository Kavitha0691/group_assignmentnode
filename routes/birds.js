import express from "express";
import {birds} from "../data/animals.js";

const birdsRouter = express.Router();

const app = express();
birdsRouter.get("/", (req,res) => {
    res.render("pages/animal-page", {
        headTitle:"Group-AssignmentNode",
        title: "Birds", 
        typePage: "home"
    })
})

birdsRouter.get(`/${birds[0].name.trim().toLowerCase()}`,(req,res) => {
    res.render("pages/animal-page", {
        headTitle:"bird1",
        title: birds[0].name,
        animalData : birds[0],
})
});

birdsRouter.get(`/${birds[1].name.trim().toLowerCase()}`,(req,res) => {
    res.render("pages/animal-page", {
        headTitle:"bird2",
        title: birds[1].name,
        animalData : birds[1],
})
});

birdsRouter.get(`/${birds[2].name.trim().toLowerCase()}`,(req,res) => {
    res.render("pages/animal-page", {
        headTitle:"bird3",
        title: birds[2].name,
        animalData : birds[2],
})
});


app.use("/birds", birdsRouter);

export default birdsRouter