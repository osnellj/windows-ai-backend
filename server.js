const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const APP_VERSION = "1.0.0";

app.get('/', (req, res) => {
  res.json({
    status: "online",
    service: "Windows AI Optimizer SaaS API"
  });
});

app.get('/version', (req, res) => {
  res.json({
    version: APP_VERSION,
    updateRequired: false
  });
});

app.get('/download/pro', (req, res) => {
  res.json({
    url: "https://ojaimesolutions.com/downloads/pro-installer.exe"
  });
});

app.post('/license/validate', (req, res) => {
  const { key } = req.body;

  if (key === "PRO-123") {
    return res.json({
      valid: true,
      type: "PRO"
    });
  }

  res.status(401).json({
    valid: false
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
