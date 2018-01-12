var express = require('express');
var router = express.Router();
var Leverancier = require('../models/leverancier');

router.post('/', function (req, res, next) {
    var leverancier = new Leverancier({
        naam: req.body.naam,
        telefoon: req.body.telefoon,
        locatie:req.body.locatie,
        rekeningnr:req.body.rekeningnr,
        status:req.body.status
    });
    leverancier.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved leverancier',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Leverancier.find()
        .exec(function(err, leveranciers){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: leveranciers
            });
        })
})

router.delete('/:id', function(req, res, next){
    Leverancier.findById(req.params.id, function(err, leverancier){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!leverancier){
            return res.status(500).json({
                title: 'Leverancier niet gevonden',
                error: {message: 'Leverancier niet gevonden'}
            });
        }
        leverancier.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Leverancier verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Leverancier.findById(req.params.id, function(err, leverancier){
        console.log(leverancier);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!leverancier){
            return res.status(500).json({
                title: 'leverancier niet gevonden',
                error: {message: 'leverancier niet gevonden'}
            });
        }
        leverancier.naam = req.body.naam;
        leverancier.locatie = req.body.locatie;
        leverancier.telefoon = req.body.telefoon;
        leverancier.rekeningnr = req.body.rekeningnr;
        leverancier.status = req.body.status;

        leverancier.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'leverancier aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
