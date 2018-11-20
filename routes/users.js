const express = require('express');
const router = express.Router();
//const models = require('../models/index');
const bcrypt = require('bcrypt');


router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/add', (req,res) => {
    res.render('signup')
});

router.get('/enter', function(req, res) {
    res.render('signin');
});

router.get('/profile', function(req, res) {
    res.render('profile');
});

module.exports = router;
