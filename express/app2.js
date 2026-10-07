import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ===============================
// 1. INFORMATIONAL STATUS CODES
// ===============================

// 100 Continue
app.get('/status/100', (req, res) => {
    res.status(100).send('100 - Continue');
});


// ===============================
// 2. SUCCESS STATUS CODES
// ===============================

// 200 OK
app.get('/status/200', (req, res) => {
    res.status(200).send('200 - OK - Request successful');
});


// 201 Created
app.get('/status/201', (req, res) => {
    res.status(201).send('201 - Created - Resource created successfully');
});


// 202 Accepted
app.get('/status/202', (req, res) => {
    res.status(202).send('202 - Accepted - Request accepted for processing');
});


// 204 No Content
app.get('/status/204', (req, res) => {
    res.status(204).send();
});


// ===============================
// 3. REDIRECTION STATUS CODES
// ===============================

// 301 Moved Permanently
app.get('/status/301', (req, res) => {
    res.redirect(301, '/status/200');
});


// 302 Found
app.get('/status/302', (req, res) => {
    res.redirect(302, '/status/200');
});


// 303 See Other
app.get('/status/303', (req, res) => {
    res.redirect(303, '/status/200');
});


// 307 Temporary Redirect
app.get('/status/307', (req, res) => {
    res.redirect(307, '/status/200');
});


// 308 Permanent Redirect
app.get('/status/308', (req, res) => {
    res.redirect(308, '/status/200');
});


// ===============================
// 4. CLIENT ERROR STATUS CODES
// ===============================

// 400 Bad Request
app.get('/status/400', (req, res) => {
    res.status(400).send('400 - Bad Request');
});


// 401 Unauthorized
app.get('/status/401', (req, res) => {
    res.status(401).send('401 - Unauthorized - Authentication required');
});


// 403 Forbidden
app.get('/status/403', (req, res) => {
    res.status(403).send('403 - Forbidden - Access denied');
});


// 404 Not Found
app.get('/status/404', (req, res) => {
    res.status(404).send('404 - Not Found - Resource does not exist');
});


// 405 Method Not Allowed
app.get('/status/405', (req, res) => {
    res.status(405).send('405 - Method Not Allowed');
});


// 406 Not Acceptable
app.get('/status/406', (req, res) => {
    res.status(406).send('406 - Not Acceptable');
});


// 408 Request Timeout
app.get('/status/408', (req, res) => {
    res.status(408).send('408 - Request Timeout');
});


// 409 Conflict
app.get('/status/409', (req, res) => {
    res.status(409).send('409 - Conflict - Resource already exists');
});


// 410 Gone
app.get('/status/410', (req, res) => {
    res.status(410).send('410 - Gone - Resource is no longer available');
});


// 411 Length Required
app.get('/status/411', (req, res) => {
    res.status(411).send('411 - Length Required');
});


// 412 Precondition Failed
app.get('/status/412', (req, res) => {
    res.status(412).send('412 - Precondition Failed');
});


// 413 Content Too Large
app.get('/status/413', (req, res) => {
    res.status(413).send('413 - Content Too Large');
});


// 415 Unsupported Media Type
app.get('/status/415', (req, res) => {
    res.status(415).send('415 - Unsupported Media Type');
});


// 422 Unprocessable Content
app.get('/status/422', (req, res) => {
    res.status(422).send('422 - Unprocessable Content');
});


// 429 Too Many Requests
app.get('/status/429', (req, res) => {
    res.status(429).send('429 - Too Many Requests');
});


// ===============================
// 5. SERVER ERROR STATUS CODES
// ===============================

// 500 Internal Server Error
app.get('/status/500', (req, res) => {
    res.status(500).send('500 - Internal Server Error');
});


// 501 Not Implemented
app.get('/status/501', (req, res) => {
    res.status(501).send('501 - Not Implemented');
});


// 502 Bad Gateway
app.get('/status/502', (req, res) => {
    res.status(502).send('502 - Bad Gateway');
});


// 503 Service Unavailable
app.get('/status/503', (req, res) => {
    res.status(503).send('503 - Service Unavailable');
});


// 504 Gateway Timeout
app.get('/status/504', (req, res) => {
    res.status(504).send('504 - Gateway Timeout');
});


// 505 HTTP Version Not Supported
app.get('/status/505', (req, res) => {
    res.status(505).send('505 - HTTP Version Not Supported');
});


// ===============================
// START SERVER
// ===============================

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

