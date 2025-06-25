import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

const dataPath = path.join(__dirname, "users.json");

app.post("/register", (req: Request, res: Response) => {
    const { username, password, email } = req.body;
  }
)

