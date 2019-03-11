'use strict';
const dotenv = require('dotenv');
const envResult = dotenv.config();


const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const moment = require('moment');

const app = express();
const fs = require('fs');
const http = require('http');
const https = require('https');


if (envResult.error) {
    throw envResult.error;
}