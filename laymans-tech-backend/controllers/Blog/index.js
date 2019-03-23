'use strict';

const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');

const { getMenuLink, createMenuLink, createBlog, getAllBlogs, getBlogById } = require('./blogController');

router.post('/blog/create/menu-link/', createMenuLink)
router.post('/blog/create/blog/', createBlog)

router.get('/blog/menu-list', getMenuLink);
router.get('/blog/list/:blogTypeId', getAllBlogs);
router.get('/blog/:blogId', getBlogById);


// router.get('/about', function (req, res) {
//     res.send('About this wiki');
// });
module.exports = router;
