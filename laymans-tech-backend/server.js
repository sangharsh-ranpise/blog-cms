'use strict';
const dotenv = require('dotenv');
const envResult = dotenv.config();


const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
// const expressWinston = require('express-winston');
const moment = require('moment');

const app = express();
// const fs = require('fs');
const http = require('http');
const https = require('https');
const config = require('./config/config');

const blogRouter = require('./controllers/Blog/index')



if (envResult.error) {
    throw envResult.error;
}
app.use(
    bodyParser.json({
        limit: '5mb'
    })
);

app.use(
    bodyParser.urlencoded({
        limit: '5mb',
        extended: true
    })
);

app.use(compression());
app.use(cors(config.env_config.corsOptions));


app.use((req, res, next) => {
    res.setHeader('content-type', 'application/json');
    // console.log("ABCs")
    // req.tokenSecret = config.secret;
    // req.tenantName = req.headers.tenant;
    app.use(compression());

    // if(!process.env.NODE_ENV !== 'prod') {
    // req.tenantName = 'hybrid';
    // }
    next();
});



app.use('/laymans-tech', blogRouter);






function logTime() {
    console.log(
        'IST:',
        moment()
            .utcOffset('+05:30')
            .format('D/MM/YYYY H:mm:ss A')
    );

    console.log(
        'UTC:',
        moment()
            .utcOffset('+00:00')
            .format('D/MM/YYYY H:mm:ss A')
    );
}


if (process.env.NODE_ENV) {
    http.createServer(app).listen(config.PORT, function () {
        console.log('HTTP server started listening on port: %s', config.PORT);
        // logTime();
    });
} else {
    // Development mode
    // const options = {
    //     cert: fs.readFileSync(`${config.rootDir}/./../ssl/certificate.crt`),
    //     key: fs.readFileSync(`${config.rootDir}/./../ssl/private.key`)
    // };
    http.createServer(app).listen(8000, () => {
        console.log(`HTTPS server started listening on port:	8000`);
        // logTime();
    });
}

process.on('uncaughtException', error => {
    logTime();
    console.log('error: ', error);
});
