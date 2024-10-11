// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/node/some-endpoint', (req, res) => {
    res.send('Its Saba, heheh :)');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on http://0.0.0.0:3000');
});
