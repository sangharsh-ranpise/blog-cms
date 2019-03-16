var mongodb = require('mongodb').MongoClient;

function connectionsManager() {
    this.connections = {};
}

connectionsManager.prototype.getConnection = function (tenantId) {
    return new Promise((resolve, reject) => {
        if (!this.connections[tenantId]) {
            mongodb
                .connect(
                    `${process.env.MONGO_CONNECTION_URL}${tenantId}`,{ useNewUrlParser: true }
                )
                .then(db => {
                    this.connections[tenantId] = db;
                    resolve(db);
                })
                .catch(err => {
                    reject(err);
                });
        } else {
            resolve(this.connections[tenantId]);
        }
    });
};

module.exports = new connectionsManager();
