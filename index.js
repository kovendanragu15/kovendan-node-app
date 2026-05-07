const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Azure! 🚀</h1>
    <p><b>NODE_ENV:</b> ${process.env.NODE_ENV}</p>
    <p><b>PORT:</b> ${process.env.PORT}</p>
    <p><b>App is running correctly!</b></p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
