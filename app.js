const nodemon = require("nodemon");
const express = require('express');
const bodyParser = require('body-parser');
let indexContent = require('./data/index.json');
let aboutUsContent = require('./data/about-us.json');
let contactUsContent = require('./data/contacts.json');
const port = 3000;
const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
    res.render('index', {
        title: "Home",
        content: indexContent
    });
});

app.get('/about-us', function(req, res) {
    res.render('about-us', {
        title: 'About Us',
        aboutUs: aboutUsContent
    });
});

app.get('/contact-us', function(req, res) {
    res.render('contact-us', {
        title: 'Contact Us',
        contacts: contactUsContent
    });
});

app.listen(port, () => {
    console.log(`app at http://localhost:${port}`);
});