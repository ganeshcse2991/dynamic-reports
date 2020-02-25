const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        let res = await db.all();

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

router.get('/:id', async(req, res, next) => {
    try {
        let res = await db.one(req.params.id);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

module.exports = router;