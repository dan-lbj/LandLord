const httpsServer = require('https');

httpsServer.createServer((req, res) => {
    console.log('server starts');
    res.end('LandLord');
}).listen(8888);

console.log('Be a landlord!');
