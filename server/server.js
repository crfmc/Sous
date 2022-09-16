const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const public = path.join(__dirname, '../client/public');


PORT = 3000;

app.use('/', express.static(public));

/**
 * Here I am injecting the preact scripts directly into the static
 * html files, in order to send an already rendered interface.
 */

// App landing
app.get('/', (req, res) => {
  const { client } = require('./built/app.js');
  const index = fs.readFileSync('../client/public/sous.html', 'utf-8');
  const finalHtml = index.replace('<!-- ::APP:: -->', client);
  res.sendFile(path.join(public, 'sous.html'));
  res.send(finalHtml);
});

// Inventory
app.get('/inventory', (req, res) => {
  // res.sendStatus(200);
  res.sendFile(path.join(public, 'inventory.html'));
});

app.listen(PORT, () => {
  console.log('Listening on Port: ', PORT);
});