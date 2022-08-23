const express = require('express');
const path = require('path');

const app = express();
const public = path.join(__dirname, '../client/public');
PORT = 3000;

app.use('/', express.static(public));

// App landing
app.get('/', (req, res) => {
  // res.sendStatus(200);
  res.sendFile(path.join(public, 'sous.html'));
});

// Inventory
app.get('/inventory', (req, res) => {
  // res.sendStatus(200);
  res.sendFile(path.join(public, 'inventory.html'));
});

app.listen(PORT, () => {
  console.log('Listening on Port: ', PORT);
});