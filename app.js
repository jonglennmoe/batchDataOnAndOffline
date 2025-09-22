const express = require('express');
const app = express();
const port = 8081;
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(__dirname + '/public/index.html'));
app.post('/api/events', (req, res) => {
    res.status(200);
    res.json({status:'success'});
});
app.get('/js/bundle.js', (req,res) => res.sendFile(__dirname + '/public/js/bundle.js'));

app.listen(port, () => {
    console.log(`Application is running on localhost:${port}`);
});