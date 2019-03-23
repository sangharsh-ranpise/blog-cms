const blogService = require('./blogService');


module.exports.getMenuLink = async (req, res) => {
    // console.log("CO<ING", req)
    try {

        const menuLinkList = await blogService.getMenuLink();
        // console.log(blog1)
        res.json(menuLinkList)

    } catch (error) {
        throw error;
    }
}

module.exports.createMenuLink = async (req, res) => {
    try {
        const menuLink = {
            navBarName: req.body.navBarName
        }
        const createMenuLink = await blogService.createMenuLink(menuLink);
        res.json(createMenuLink)
    } catch (error) {
        throw error;
    }
}

module.exports.createBlog = async (req, res) => {
    try {
        const createMenuLink = await blogService.createBlog(req.body.newBlogContent);
        res.json(createMenuLink)
    } catch (error) {
        throw error;
    }
}

module.exports.getAllBlogs = async (req, res) => {
    try {
        console.log(req.params.blogTypeId);
        const blogsList = await blogService.getAllBlogs(req.params.blogTypeId);
        res.json(blogsList)
    } catch (error) {
        throw error;
    }
}

module.exports.getBlogById = async (req, res) => {
    try {
        const selectedBlog = await blogService.getBlogById(req.params.blogId);
        res.json(selectedBlog)
    } catch (error) {
        throw error;
    }
}