// Imports express out of node_modules, and fs/path from node directly
import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
// declaring variable for the server (app = express) and for the Port we will be using
const app = express();
const PORT = 3000;
// app.use(...) lets the user use the public site, and express.json lets the server understand json-data from formulars (like the registry-formular that we want to save as json)
app.use(express.static("public"));
app.use(express.json());
// const dataPath saves the path to the json file as a variable 
// path.join connects the path so it works on every operating system
const dataPath = path.join(__dirname, "users.json");
// app.post defines a Route that only reacts on /register
// req: Request is an Object that gathers Information from the request made by app.post("/register")
// res: Response - responds after gathering the data from req.body
app.post("/register", (req: Request, res: Response) => {
    const { username, password, email } = req.body;
  }
)

