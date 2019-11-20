const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/public', express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/torrhebia/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about/index.html'));
});

app.get('/torrhebia/shop-page', (req, res) => {
    res.sendFile(path.join(__dirname + '/shop-page/index.html'));
});

app.get('/torrhebia/stockist', (req, res) => {
    res.sendFile(path.join(__dirname + '/stockist/index.html'));
}); 

app.get('/torrhebia/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port port!`))