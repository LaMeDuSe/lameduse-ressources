const http = require('http');

// Read the target host and port from environment variables
const targetHost = process.env.TARGET_HOST || 'localhost';
const targetPort = process.env.TARGET_PORT || '8080';

// Read input from stdin
process.stdin.setEncoding('utf8');
process.stdin.on('data', (text) => {
    const options = {
        hostname: targetHost,
        port: targetPort,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Length': Buffer.byteLength(text)
        }
    };

    const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`Response: ${chunk}`);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    // Write data to request body
    req.write(text);
    req.end();
});
