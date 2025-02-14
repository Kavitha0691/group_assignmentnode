import express from "express";


const app = express();
const reptilesRouter = Router.express();

reptilesRouter.get("/", (req,res) => {
    res.render("pages/animal-page", {
    headTitle: "Group Assignment",
    title: "Reptiles",
    



 } )    
})