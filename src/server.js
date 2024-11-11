// server.js (Backend)
const express = require('express');
const os = require('os');
const cors = require('cors')
const app = express();
const port = 4000;

const corsOptions={
    origin: 'http://localhost:3000',
    methods: 'GET',
    allowedHeaders: 'Content-Type',
}

app.use(cors(corsOptions));

app.get('/computer-name', (req, res) => {
  const computerName = os.hostname(); // Get the hostname (computer name)
  res.json({ name: computerName });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
