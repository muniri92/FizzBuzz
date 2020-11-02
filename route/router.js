'use strict';

// npm modules
const { Router } = require('express');

let router = module.exports = new Router();

// Home Page
router.get('/', (req, res) => {
    res.render('../views/index');
});







