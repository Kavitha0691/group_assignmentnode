import express from "express";
import {mammals} from "../data/animals.js";

const mammalsRouter = express.Router();

mammalsRouter.get("/", (req, res) => {
    res.render("pages/animal-page", {
        headtitle: "Mammals",
        title: "Mammals",
        animalData: mammals,
    }) 
 });

 mammalsRouter.get(`/${mammals[0].name.trim().toLowerCase()}`, (req, res) => {
    res.render("pages/animal-page", {
        headtitle: "Mammals",
        title: mammals[0].name,
        animalData: mammals[0],
    }) 
 });

 mammalsRouter.get(`/${mammals[1].name.trim().toLowerCase()}`, (req, res) => {
    res.render("pages/animal-page", {
        headtitle: "Mammals",
        title: mammals[1].name,
        animalData: mammals[1],
    }) 
 });

 mammalsRouter.get(`/${mammals[2].name.trim().toLowerCase()}`, (req, res) => {
    res.render("pages/animal-page", {
        headtitle: "Mammals",
        title: mammals[2].name,
        animalData: mammals[2],
    }) 
 });

 export default mammalsRouter;

