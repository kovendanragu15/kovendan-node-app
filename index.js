const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Azure! 🚀</h1><p>Kovendan Node.js app is live!</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
