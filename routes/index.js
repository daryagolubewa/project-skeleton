const express = require('express');
const models = require('../models/index');
const addMiddlewares = require('../middlewares/addMiddlewares');
const router = express.Router();
const passport = require('passport');
const getUserName = require('../helpers/functions');

addMiddlewares(router, models.User);


router.get('/', async function(req, res, next) {
    let profileName = await getUserName(req)
    res.render('index', {userName: profileName.name})

});



module.exports = router;