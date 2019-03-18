const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res) => {
    User.create(req.body)
        .then(result => {
            res.status(result.status).send(result.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

module.exports = router;
