const uuid = require('uuid');
const connectionsManager = require('../../db-access/connectionManager');


module.exports.getMenuLink = async () => {
    try {
        const db = await connectionsManager.getConnection('laymans-tech');
        const project = {
            id: 1,
            navBarName: 1,
            navBarOptions: 1
        }
        const menuLinkList = await db
            .collection('blogs')
            .find({}, project).toArray();

        return menuLinkList;
    } catch (error) {
        throw error;
    }
}

module.exports.createMenuLink = async (menuLink, dbName = null) => {
    const db = await connectionsManager.getConnection('laymans-tech');
    let navBarOptions = menuLink.navBarOptions ? menuLink.navBarOptions : []
    const findMenuLinkQuery = {
        navBarName: menuLink.navBarName
    }
    const updateMenuLink = {
        id: uuid(),
        navBarName: menuLink.navBarName,
        navBarOptions: navBarOptions
        //     navBarOptions:[
        //         {
        // id:'',
        // optionName,
        //     }
        // ]
    }
    const updateOrAddMenuLink = await db
        .collection('blogs')
        .update(findMenuLinkQuery, updateMenuLink, { upsert: true });
    return updateOrAddMenuLink;
}