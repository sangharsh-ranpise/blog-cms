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