const http = require('http');
require('dotenv').config();

const server = http.createServer((req, res) => {
    const apiKey = process.env.API_KEY;
    if(req.method == 'GET' && req.url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
        <head>
            <div id="map"></div>
            <script>
                var map;
                function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
                });
                }
            </script>
            
        <script src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap"
        async defer></script>
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