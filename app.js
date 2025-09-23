const express = require('express');
const compression = require('compression');
const rateLimit =  require('express-rate-limit');
const path = require('path');

const limiter = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 3 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    ipv6Subnet: 62
});

const app = express();
const port = 8081;

app.use(limiter)
app.use(compression());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(__dirname + '/public/index.html'));

// Implement your solution for handeling the eventsBatch
app.post('/api/data', (req, res) => {
    res.status(200);
    res.json({status:'success'});
});
app.get('/js/bundle.js', (req,res) => res.sendFile(__dirname + '/public/js/bundle.js'));

app.listen(port, () => {
    console.log(`Application is running on localhost:${port}`);
});