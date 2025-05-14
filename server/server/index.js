const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("waitlist.db");

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  roles TEXT
)`);

app.post("/api/waitlist", (req, res) => {
  const { name, email, roles } = req.body;

  if (!name || !email || !roles) {
    return res.status(400).json({ error: "Faltan campos" });
  }

  if (
    typeof name !== "string" || name.length > 100 ||
    typeof email !== "string" || email.length > 200 ||
    !email.includes("@")
  ) {
    return res.status(400).json({ error: "Datos inválidos" });
  }

  db.run(
    `INSERT INTO users (name, email, roles) VALUES (?, ?, ?)`,
    [name, email, roles],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});