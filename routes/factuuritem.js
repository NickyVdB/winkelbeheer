var express = require('express');
var router = express.Router();
var FactuurItem = require('../models/factuuritem');

router.post('/', function (req, res, next) {
    var factuuritem = new FactuurItem({
        beschrijving:req.body.beschrijving,
        factuurid: req.body.factuurid,
        prijs: req.body.prijs
    });
    factuuritem.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved factuuritem',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    FactuurItem.find()
        .exec(function(err, factuuritems){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: factuuritems
            });
        })
})

router.delete('/:id', function(req, res, next){
    FactuurItem.findById(req.params.id, function(err, factuuritem){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!factuuritem){
            return res.status(500).json({
                title: 'factuuritem niet gevonden',
                error: {message: 'factuuritem niet gevonden'}
            });
        }
        factuuritem.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'factuuritem verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    FactuurItem.findById(req.params.id, function(err, factuuritem){
        console.log(factuuritem);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!factuuritem){
            return res.status(500).json({
                title: 'factuuritem niet gevonden',
                error: {message: 'factuuritem niet gevonden'}
            });
        }
        factuuritem.factuurid = req.body.factuurid;
        factuuritem.prijs = req.body.prijs;
        factuuritem.beschrijving = req.body.beschrijving;

        factuuritem.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'factuuritem aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
