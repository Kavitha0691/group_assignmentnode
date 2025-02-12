import express from 'express';
import * as path from 'path';
import mammalsRouter from './routes/mammals.js';

const __dirname = path.resolve();
const PORT = 3030;
const app = express();

//Home site, landing page.
app.get('/', (req, res) => {
    res.render('pages/home', {

    });
})

//Routing Here
app.use("/mammals", mammalsRouter)

//Setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); 
app.set("views", path.join(__dirname, "views"));
//Listen
app.listen(PORT, () => console.log(`Starting server, listening on port ${PORT}`))