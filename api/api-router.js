// Imports
const bcrypt = require('bcrypt');
const router = require('express').Router();
// Import routers
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
// Import middleware
const restricted = require('../auth/restricted-middleware.js');
// Set routers
router.use('/auth', authRouter);
router.use('/users', usersRouter);


// CRUD

// Hashes authentication header
router.get('/hash', (req, res) => {
  // Get authentication header
  const authentication = req.headers.authentication;
  // Hash auth header value
  const hash = bcrypt.hashSync(authentication, 8); // Hashes 8x
  // Respond with hashed value
  res.json({ originalValue: authentication, hash });
});

// The API is alive!
router.get('/', (req, res) => {
  res.json({ api: "It's alive!" });
});

module.exports = router;