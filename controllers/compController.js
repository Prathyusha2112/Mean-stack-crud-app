const express = require('express');
var router = express.Router();
var { Compensation, CompMonth } = require('../models/compensation');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Compensation.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('error in retrieving compensation: ', +JSON.stringify(err, undefined, 2)); }
    });

});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Compensation.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving compensation :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var comp = new Compensation({
        role: req.body.role,
        ctc: req.body.ctc,
        basic: req.body.basic,
        hra: req.body.hra,
        lta: req.body.lta,
        bonus: req.body.bonus,
        ctcm: req.body.ctc / 12,
        basicm: req.body.basic / 12,
        hram: req.body.hra / 12,
        ltam: req.body.lta / 12,
        bonusm: req.body.bonus / 12

    });

    comp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('error in compensation save: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var comp = {
        role: req.body.role,
        ctc: req.body.ctc,
        basic: req.body.basic,
        hra: req.body.hra,
        lta: req.body.medical,
        bonus: req.body.bonus
    };


    Compensation.findByIdAndUpdate(req.params.id, { $set: comp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in updating compensation' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Compensation.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in compensation Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;