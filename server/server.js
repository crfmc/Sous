const express = require('express');
const path = require('path');
const fs = require('fs');
const preactRender = require('preact-render-to-string');

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
  const { App } = require('./dist/AppServer.js');
  const index = fs.readFileSync('../client/public/sous.html', 'utf-8');
  const finalHtml = index.replace('<!-- ::APP:: -->', preactRender(App()));
  res.sendFile(path.join(public, 'sous.html'));
  res.send(finalHtml);
});

// Inventory
app.get('/inventory', (req, res) => {
  res.sendFile(path.join(public, 'inventory.html'));
});

app.listen(PORT, () => {
  console.log('Listening on Port: ', PORT);
});