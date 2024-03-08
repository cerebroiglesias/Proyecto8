const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

let visitas = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send('La cantidad de visitas es ' + visitas);
})

app.get('/fyh', (req, res) => {
    let aux = {
        fyh: new Date().toLocaleString().replace(',', '')
    };
    res.send(aux);
})

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})