import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Pfad zur users.json im gleichen Ordner wie server.ts
const usersPath = path.resolve(__dirname, "users.json");

app.use(express.static("public"));
app.use(express.json());

app.post("/register", (req: any, res: any) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "Alle Felder erforderlich" });
  }

  // Lade bestehende Benutzer oder leeres Array, wenn Datei fehlt
  const users = fs.existsSync(usersPath)
    ? JSON.parse(fs.readFileSync(usersPath, "utf-8"))
    : [];

  // Benutzername prüfen
  if (users.some((u: any) => u.username === username)) {
    return res.status(409).json({ error: "Benutzername bereits vergeben" });
  }

  // Neuen Benutzer speichern
  users.push({ username, password, email });
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

  return res.status(201).json({ message: "Registrierung erfolgreich!" });
});

app.post("/login", (req: any, res: any) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Benutzername und Passwort erforderlich" });
  }

  if (!fs.existsSync(usersPath)) {
    return res.status(400).json({ error: "Keine Benutzer gefunden" });
  }

  const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
  const user = users.find((u: any) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Ungültiger Benutzername oder Passwort" });
  }

  return res.status(200).json({ message: "Login erfolgreich" });
});

app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});