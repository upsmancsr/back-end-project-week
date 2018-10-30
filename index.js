const server = require('./server.js');

const port = 3300;
server.listen(port, () => console.log(`\nServer is listening on port ${port}\n`));