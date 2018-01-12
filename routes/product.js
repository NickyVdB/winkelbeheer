var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.post('/', function (req, res, next) {
    var product = new Product({
        naam: req.body.naam,
        beschrijving: req.body.beschrijving,
        afdeling:req.body.afdeling,
        code:req.body.code,
        leverancier:req.body.leverancier,
        prijs: req.body.prijs
    });
    product.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved product',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Product.find()
        .exec(function(err, producten){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: producten
            });
        })
})

router.delete('/:id', function(req, res, next){
    Product.findById(req.params.id, function(err, product){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!product){
            return res.status(500).json({
                title: 'product niet gevonden',
                error: {message: 'product niet gevonden'}
            });
        }
        product.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'product verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function(req, res, next){
    console.log("routes");
    Product.findById(req.params.id, function(err, product){
        console.log(product);
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!product){
            return res.status(500).json({
                title: 'product niet gevonden',
                error: {message: 'product niet gevonden'}
            });
        }
        product.naam = req.body.naam;
        product.beschrijving = req.body.beschrijving;
        product.code = req.body.code;
        product.prijs = req.body.prijs;
        product.leverancier = req.body.leverancier;
        product.afdeling = req.body.afdeling;

        product.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'product aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
