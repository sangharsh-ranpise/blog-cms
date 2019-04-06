'use strict';

const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');

const { getMenuLink, createMenuLink, createBlog, getAllBlogs, getBlogById, updateBlog, getLatestBlogByTopicName } = require('./blogController');

router.post('/blog/create/menu-link/', createMenuLink)
router.post('/blog/create/blog/', createBlog)
router.post('/blog/update/blog/', updateBlog)

router.get('/blog/menu-list', getMenuLink);
router.get('/blog/list/:blogTypeId', getAllBlogs);
router.get('/blog/:blogId', getBlogById);
router.get('/blog/topicId/:topicId/blogId/:blogId', getLatestBlogByTopicName);


// router.get('/about', function (req, res) {
//     res.send('About this wiki');
// });
module.exports = router;
