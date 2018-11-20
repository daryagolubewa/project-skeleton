const express = require('express');
const router = express.Router();
//const models = require('../models/index');
const bcrypt = require('bcrypt');
addMiddlewares(router, models.User);

const saltRounds = 10;


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

router.post('/add', async (req, res) => {
    let curEmail = await models.User.getEmail(req.body.email)
    if((curEmail.length) === 0) {
        models.User.create({"email": req.body.email, "password": bcrypt.hashSync(req.body.password, saltRounds)})
        res.send(200, "Ok")
    }
    else {
        if(curEmail.length === 0) {
            res.send(400, 'This email is already used')
        }
        else {
            res.send(400, 'This phone is already used')
        }
    }
})

router.post('/enter', (req, res) => {
    addMiddlewares(router, models.User);
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.send(400, err);
        }
        req.login(user, (err) => {
            if (err) {
                return res.send(400 , err);
            }
            return res.json(user)
        })
    })(req, res);
});

module.exports = router;
