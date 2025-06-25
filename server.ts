import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

interface User {
  username: string;
  password: string;
  email: string;
}

const usersPath = path.join(__dirname, "users.json");

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Damit du deine HTML-Seiten abrufen kannst

// User-Datei lesen
function readUsers(): User[] {
  if (!fs.existsSync(usersPath)) return [];
  const data = fs.readFileSync(usersPath, "utf-8");
  return JSON.parse(data);
}

// User-Datei schreiben
function saveUsers(users: User[]) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), "utf-8");
}

// Registrierung
app.post("/register", (req, res) => {
  const { username, password, email } = req.body as User;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "Bitte alle Felder ausfüllen." });
  }

  const users = readUsers();

  const userExists = users.some(u => u.username === username || u.email === email);
  if (userExists) {
    return res.status(400).json({ error: "Benutzername oder E-Mail bereits vergeben." });
  }

  users.push({ username, password, email });
  saveUsers(users);

  res.status(201).json({ message: "Registrierung erfolgreich!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});