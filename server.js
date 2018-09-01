const http = require('http');
require('dotenv').config();

const server = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
        <head>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"></script>
        <body>
            Hello LandLord!
        </body>
        <style>
            #map {
                height: 100%;
            }
            html, body {
                height: 100%;
                margin: 0;
                padding: 0;
            }
        </style>
        </head>
        </html>
        `);
        res.end();
    }
});

server.listen(3000);