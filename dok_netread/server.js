const http = require('http');

// Function to handle incoming requests
const requestListener = (req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        let body = '';

        // Collect the data from the request
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Once all the data is received, log it and send a response
        req.on('end', () => {
            console.log('Received message:', body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Message received');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
};

// Create the server
const server = http.createServer(requestListener);

// Start the server listening on 0.0.0.0:8080
server.listen(8080, '0.0.0.0', () => {
    console.log('Server is listening on port 8080');
});
