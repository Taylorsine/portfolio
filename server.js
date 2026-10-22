const express = require('express');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname)));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`   ✨  Portfolio Ingénieur RSI - Mode Prévisualisation `);
  console.log(`   🌐  Accessible en local sur : http://localhost:${PORT} `);
  console.log(`=======================================================`);
});
