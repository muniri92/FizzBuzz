'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

// App dependencies
const router = require('../route/router.js');

let server;
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use static files
app.use(express.static(path.join(__dirname, '../public')));
// Enable cors
app.use(cors());

// Add routes
app.use(router);

const serverControl = module.exports = {};

// Start Server
serverControl.start = () => {
    return new Promise((resolve, reject) => {
        if (!server || !server.isOn) {
            server = app.listen(process.env.PORT, () => {
                console.log('server up :: ', process.env.PORT);
                server.isOn = true;
                resolve();
            });
            return;
        }
        reject();
    });
};

// Stop Server
serverControl.stop = () => {
    return new Promise((resolve, reject) => {
        if (server && server.isOn) {
            server.close(() => {
                console.log('server down');
                server.isOn = false;
                resolve();
            });
            return;
        }
        reject();
    });
};
