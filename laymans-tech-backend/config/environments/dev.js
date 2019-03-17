module.exports.corsOptions = {
    origin: [
        'http://localhost:4201',
        // /basixstest/,
        // /bsx.local/,
        // /hybrid.local/,
        // /agent/,
        // /manager/,
        // /admin/,
        /localhost/,
        // /localweb/
    ],
    methods: 'POST,GET,PUT,DELETE,PATCH,OPTIONS',
    exposedHeaders: 'Content-Range,X-Content-Range',
    credentials: true,
    allowedHeaders:
        'Cache-Control, Origin, Authorization, Content-Type',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    maxAge: 1400
    // credentials : true
};