// Import server
const server = require('./api/server.js');
// Tell server where to listen
const PORT = process.env.PORT || 5309;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));