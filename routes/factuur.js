var express = require('express');
var router = express.Router();
var Factuur = require('../models/factuur');

router.post('/', function (req, res, next) {
    var factuur = new Factuur({
        klantnaam: req.body.klantnaam,
        klantid: req.body.klantid,
        status: req.body.status,
        factuurid: req.body.factuurid
    });
    factuur.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved factuur',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Factuur.find()
        .exec(function(err, facturen){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: facturen
            });
        })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Factuur.findById(req.params.id, function(err, factuur){
        console.log(factuur);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!factuur){
            return res.status(500).json({
                title: 'factuur niet gevonden',
                error: {message: 'factuur niet gevonden'}
            });
        }
        factuur.klantnaam = req.body.klantnaam;
        factuur.klantid = req.body.klantid;
        factuur.status = req.body.status;
        factuur.factuurid = req.body.factuurid;

        factuur.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'factuur aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
