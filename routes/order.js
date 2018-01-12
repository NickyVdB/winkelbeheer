var express = require('express');
var router = express.Router();
var Order = require('../models/order');

router.post('/', function (req, res, next) {
    var order = new Order({
        naam: req.body.naam,
        datum: req.body.datum,
        status: req.body.status,
        totaalprijs: req.body.totaalprijs,
        leverancier: req.body.leverancier,
        verantwoordelijke: req.body.verantwoordelijke,
    });
    order.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved order',
            obj: result
        });
    });
});

router.get('/', function (req, res, next) {
    Order.find()
        .exec(function (err, orders) {
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: orders
            });
        })
})

router.put('/:id', function (req, res, next) {
    console.log("routes");
    Order.findById(req.params.id, function (err, order) {
        console.log(order);
        if (err) {
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if (!order) {
            return res.status(500).json({
                title: 'order niet gevonden',
                error: {message: 'order niet gevonden'}
            });
        }
        order.naam = req.body.naam;
        order.datum = req.body.datum;
        order.status = req.body.status;
        order.totaalprijs = req.body.totaalprijs;
        order.leverancier = req.body.leverancier;
        order.verantwoordelijke = req.body.verantwoordelijke;

        order.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'order aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
