var express = require('express');
var router = express.Router();
var Werknemer = require('../models/werknemer');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/werknemer', function (req, res, next) {
    var werknemer = new Werknemer ({
        naam: req.body.naam,
        voornaam: req.body.voornaam,
        telefoon: req.body.telefoon
    });

    werknemer.save();

    res.redirect('/werknemers')
})

module.exports = router;
