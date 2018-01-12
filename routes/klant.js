var express = require('express');
var router = express.Router();
var Klant = require('../models/klant');

router.post('/', function (req, res, next) {
    var klant = new Klant({
        naam: req.body.naam,
        voornaam: req.body.voornaam,
        kortingsprocent: req.body.kortingsprocent,
        telefoon:req.body.telefoon,
        email: req.body.email,
    });
    klant.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved klant',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Klant.find()
        .exec(function(err, klanten){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: klanten
            });
        })
})


router.get('/:id', function (req, res, next) {
    Klant.findById(req.params.id, function(err, klant){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: klant
            });
        })
})


router.delete('/:id', function(req, res, next){
    Klant.findById(req.params.id, function(err, klant){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!klant){
            return res.status(500).json({
                title: 'Klant niet gevonden',
                error: {message: 'Klant niet gevonden'}
            });
        }
        klant.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Klant verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Klant.findById(req.params.id, function(err, klant){
        console.log(klant);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!klant){
            return res.status(500).json({
                title: 'klant niet gevonden',
                error: {message: 'klant niet gevonden'}
            });
        }
        klant.naam = req.body.naam;
        klant.voornaam = req.body.voornaam;
        klant.kortingsprocent = req.body.kortingsprocent;
        klant.telefoon = req.body.telefoon;
        klant.email = req.body.email;

        klant.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'afdeling aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
