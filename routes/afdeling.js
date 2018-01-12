var express = require('express');
var router = express.Router();
var Afdeling = require('../models/afdeling');

router.post('/', function (req, res, next) {
    var afdeling = new Afdeling({
        naam: req.body.naam,
        beschrijving: req.body.beschrijving,
        verantwoordelijke:req.body.verantwoordelijke
    });
    afdeling.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved afdeling',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Afdeling.find()
        .exec(function(err, afdelingen){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: afdelingen
            });
        })
})

router.get('/:id', function (req, res, next) {
    Afdeling.find()
        .exec(function(err, afdelingen){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: afdelingen
            });
        })
})
router.delete('/:id', function(req, res, next){
    Afdeling.findById(req.params.id, function(err, afdeling){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!afdeling){
            return res.status(500).json({
                title: 'Afdeling niet gevonden',
                error: {message: 'Afdeling niet gevonden'}
            });
        }
        afdeling.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Afdeling verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Afdeling.findById(req.params.id, function(err, afdeling){
        console.log(afdeling);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!afdeling){
            return res.status(500).json({
                title: 'afdeling niet gevonden',
                error: {message: 'afdeling niet gevonden'}
            });
        }
        afdeling.naam = req.body.naam;
        afdeling.beschrijving = req.body.beschrijving;
        afdeling.verantwoordelijke = req.body.verantwoordelijke;

        afdeling.save(function (err, result) {
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
