const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3001;

// 🟢 IMPORTANTE: estos middlewares antes de las rutas
app.use(cors());
app.use(express.json()); // << Asegúrate de que esto está

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