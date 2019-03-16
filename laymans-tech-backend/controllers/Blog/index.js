'use strict';

const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');

const { blog, createMenuLink } = require('./blogController');

router.post('/blog/create/menu-link/', createMenuLink)
router.get('/blog', blog);

// router.get('/about', function (req, res) {
//     res.send('About this wiki');
// });
module.exports = router;
