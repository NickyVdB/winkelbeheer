var express = require('express');
var router = express.Router();
var Werknemer = require('../models/werknemer');

router.post('/', function (req, res, next) {
    var werknemer = new Werknemer({
        naam: req.body.naam,
        voornaam: req.body.voornaam,
        telefoon:req.body.telefoon
    });
    werknemer.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Werknemer.find()
        .exec(function(err, werknemers){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: werknemers
            });
        })
})

router.delete('/:id', function(req, res, next){
    Werknemer.findById(req.params.id, function(err, werknemer){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!werknemer){
            return res.status(500).json({
                title: 'Werknemer niet gevonden',
                error: {message: 'Werknemer niet gevonden'}
            });
        }
        werknemer.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'werknemer verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Werknemer.findById(req.params.id, function(err, werknemer){
        console.log(werknemer);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!werknemer){
            return res.status(500).json({
                title: 'Werknemer niet gevonden',
                error: {message: 'Werknemer niet gevonden'}
            });
        }
        werknemer.naam = req.body.naam;
        werknemer.voornaam = req.body.voornaam;
        werknemer.telefoon = req.body.telefoon;

        werknemer.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'werknemer aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
