const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/login', (req, res) => {
    User.login(req.body)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

router.put('/status', (req, res) => {
    User.updateStatus(req.body)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

router.get('/list', (req, res) => {
    User.list(req.query._id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

module.exports = router;
