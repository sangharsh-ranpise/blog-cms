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
            .collection('blog-topics')
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
        .collection('blog-topics')
        .update(findMenuLinkQuery, updateMenuLink, { upsert: true });
    return updateOrAddMenuLink;
}

module.exports.createBlog = async (newBlogContent) => {
    try {
        const db = await connectionsManager.getConnection('laymans-tech');
        const numberOfReaders = {
            daily: 0,
            weekly: 0,
            monthly: 0,
            yearly: 0
        }
        const createNewBlog = {
            id: uuid(),
            mainHeader: newBlogContent.mainHeader,
            writerDetails: {
                writerName: newBlogContent.writerName,
                aboutWriter: newBlogContent.aboutWriter,
            },
            paragraphs: newBlogContent.paragraphs,
            blogType: newBlogContent.blogType,
            blogCreationDate: newBlogContent.blogCreationDate,
            updatedAt: newBlogContent.blogCreationDate,
            isRatingGiven: false,
            rate: 0,
            numberOfReaders: numberOfReaders,
            softDeleteBlog: false,
            hardDeleteBlog: false
        }
        const addNewBlog = await db
            .collection('blogs')
            .insert(createNewBlog);
        return addNewBlog;
    } catch (error) {
        throw error;
    }
}

module.exports.getAllBlogs = async (blogTypeId) => {
    try {
        const db = await connectionsManager.getConnection('laymans-tech');
        const matchQuery = {
            $match: {
                'blogType.id': blogTypeId,
                'softDeleteBlog': false,
                'hardDeleteBlog': false,
            }
        }
        const projectQuery = {
            $project: {
                // id: 1,
                // mainHeader: 1,
                // writerDetails: 1,
                // blogType: 1
                _id: 0
            }
        }
        const sortQuery = {
            $sort: { updatedAt: -1 }
        }
        const pipeline = [
            matchQuery,
            projectQuery,
            sortQuery
        ]
        const blogsList = await db
            .collection('blogs')
            .aggregate(pipeline).toArray();
        return blogsList;
    } catch (error) {
        throw error;
    }
}

module.exports.getBlogById = async (blogId) => {
    try {
        const db = await connectionsManager.getConnection('laymans-tech');
        const findQuery = {
            'id': blogId,
            'softDeleteBlog': false,
            'hardDeleteBlog': false,
        }

        const selectedBlog = await db
            .collection('blogs')
            .find(findQuery).next();
        return selectedBlog;
    } catch (error) { }
}

module.exports.updateBlog = async (newBlogContent) => {
    try {
        const db = await connectionsManager.getConnection('laymans-tech');
        console.log(newBlogContent)
        const query = {
            id: newBlogContent.id
        }
        const updateBlog = {
            $set: {
                mainHeader: newBlogContent.mainHeader,
                writerDetails: {
                    writerName: newBlogContent.writerName,
                    aboutWriter: newBlogContent.aboutWriter,
                },
                paragraphs: newBlogContent.paragraphs,
                blogType: newBlogContent.blogType,
                updatedAt: newBlogContent.updatedAt,
                softDeleteBlog: false,
                hardDeleteBlog: false
            }
        }
        const addNewBlog = await db
            .collection('blogs')
            .update(query, updateBlog);
        return addNewBlog;
    } catch (error) {
        throw error;
    }
}


module.exports.getLatestBlogByTopicName = async (topicId, blogId = "latest") => {
    try {
        const db = await connectionsManager.getConnection('laymans-tech');
        let pipeLine = [
            {
                $match: {
                    'blogType.id': topicId
                }
            }, {
                $sort: { updatedAt: -1 }
            }
        ];
        console.log("OOPS", blogId)
        if (blogId !== 'latest') {
            const matchQuery = {
                $match: {
                    id: blogId
                }
            }
            pipeLine.push(matchQuery);
            // console.log(JSON.stringify(pipeLine, undefined, 2))
        }
        const latestBlog = await db.collection('blogs')
            .aggregate(pipeLine).next();
        return latestBlog;
    } catch (error) {
        throw error;
    }
}