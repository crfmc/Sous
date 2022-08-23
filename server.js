const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'src/public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/public/sous.html'));
});

app.listen(3000, () => {
    console.log('Sous listening on PORT: 3000')
})