const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head>
        <body>
        Hello LandLord!
        </body>
        </head>
        </html>
        `);
        res.end();
    }
});

server.listen(3000);