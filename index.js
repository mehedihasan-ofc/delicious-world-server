const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const chefs = require('./data/chefs.json');
const testimonials = require('./data/testimonials.json');
const slider = require('./data/slider.json');

app.get('/', (req, res) => {
    res.send('Delicious World is Running')
})

app.get('/slider', (req, res) => {
    res.send(slider);
})

// all chef's
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

// specific chef
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(chef => chef.id === id);
    res.send(selectedChef);
})

// testimonials
app.get('/testimonials', (req, res) => {
    res.send(testimonials);
})

app.listen(port, () => {
    console.log(`Delicious API is running on port: ${port}`);
})