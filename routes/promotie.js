var express = require('express');
var router = express.Router();
var Promotie = require('../models/promotie');

router.post('/', function (req, res, next) {
    var promotie = new Promotie({
        naam: req.body.naam,
        beschrijving: req.body.beschrijving,
        afdeling:req.body.afdeling,
        kortingsprocent:req.body.kortingsprocent,
        begindatum:req.body.begindatum,
        einddatum: req.body.einddatum
    });
    promotie.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved promotie',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Promotie.find()
        .exec(function(err, promoties){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: promoties
            });
        })
})

router.delete('/:id', function(req, res, next){
    Promotie.findById(req.params.id, function(err, promotie){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!promotie){
            return res.status(500).json({
                title: 'Promotie niet gevonden',
                error: {message: 'Promotie niet gevonden'}
            });
        }
        promotie.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Promotie verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Promotie.findById(req.params.id, function(err, promotie){
        console.log(promotie);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!promotie){
            return res.status(500).json({
                title: 'promotie niet gevonden',
                error: {message: 'promotie niet gevonden'}
            });
        }
        promotie.naam = req.body.naam;
        promotie.beschrijving = req.body.beschrijving;
        promotie.kortingsprocent = req.body.kortingsprocent;
        promotie.begindatum = req.body.begindatum;
        promotie.einddatum = req.body.einddatum;
        promotie.afdeling = req.body.afdeling;

        promotie.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'promotie aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
