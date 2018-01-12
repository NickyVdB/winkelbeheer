var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var User = require('../models/user');
var Message = require('../models/message');

router.get('/', function (req, res, next) {
    Message.find()
        .populate('user', 'firstName')
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.use('/', function(req,res,next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if (err){
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    const decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        const message = new Message({
            content: req.body.content,
            user: user._id
        });
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    })
});



router.patch('/:id', function(req, res, next){
    const decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        if(message.user != decoded.user._id){
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'message aangepast!',
                obj: result
            });
        });
    })
})

router.delete('/:id', function(req, res, next){
    const decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        if(message.user != decoded.user._id){
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'message verwijderd!',
                obj: result
            });
        });
    })
})

module.exports = router;
