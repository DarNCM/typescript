// Imports express out of node_modules, and fs/path from node directly
import express from "express";
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
const dataPath = path.join(import.meta.dirname, "users.json");
// app.post defines a Route that only reacts on /register
// req: Request is an Object that gathers Information from the request made by app.post("/register")
// res: Response - responds after gathering the data from req.body
app.post("/register", (req, res) => {
//here we would get the full rey.body = the full data from the page but we extract the data with {...} and express what will happen via Arrow Function
const { username, password, email } = req.body;

//We ask the following: if No Username, OR no Password OR no email has been put into either field, we would get an error (400)
//if done correctly, they would get the Message from (200)
if (!username || !password || !email) {
  res.status(400).json({ error: "Alle Felder sind erforderlich!" }).send();
}
else {
  res.status(200).json({ message: "Erfolgreiche Eingabe!" }).send();
}
  const users = req.body;
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), "utf-8"); 

const newUser = {username, password, email};

// 1. Load existing users from file (or start with an empty array)
let nUsers = [];
if (fs.existsSync(dataPath)) {
  const fileData = fs.readFileSync(dataPath, "utf-8");
  try {
    nUsers = JSON.parse(fileData);
    if (!Array.isArray(users)) {
      nUsers = []; // If somehow it's not an array
    }
  } catch (err) {
    console.error("Fehler beim Parsen von users.json:", err);
    nUsers = []; // On JSON error, start fresh
  }
}
  // 2. Add (push) new user to the array
nUsers.push(newUser);

// 3. Save the updated user list back to the file
fs.writeFileSync(dataPath, JSON.stringify(nUsers, null, 2), "utf-8");

});







  app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});





