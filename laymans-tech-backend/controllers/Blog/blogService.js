const uuid = require('uuid');
const connectionsManager = require('../../db-access/connectionManager');


module.exports.getBlogs = async () => {
    const db = await connectionsManager.getConnection('laymans-tech');
    const abc = {
        'blog': 'abcd'
    }
    // console.log(db)
    await db
        .collection('blogs')
        .insert(abc);

    return await 'Updated Successfully';
}

module.exports.createMenuLink = async (dbName, menuLink) => {
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