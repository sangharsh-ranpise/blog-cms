const blogService = require('./blogService');


module.exports.blog = async (req, res) => {
    // console.log("CO<ING", req)
    try {

        const blog1 = await blogService.getBlogs();
        console.log(blog1)
        res.json(blog1)

    } catch (error) {
        throw error;
    }
}

module.exports.createMenuLink = async (req, res) => {
    try {
        const createMenuLink = await blogService.createMenuLink(dbName, menuLink);
    } catch (error) {
        throw error;
    }
}