// Imports
const express = require('express');
// Import router
const apiRouter = require('./api-router.js');
// Middleware
const configureMiddleware = require('./configure-middleware.js');
// Create/setup server
const server = express();
configureMiddleware(server);
// Set router
server.use('/api', apiRouter);

module.exports = server;