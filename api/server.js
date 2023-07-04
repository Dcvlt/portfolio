'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(
    express.static(path.join(__dirname, 'dist'), {
        setHeaders: (res, path) => {
            if (path.endsWith('.js')) {
                res.setHeader('Content-Type', 'application/javascript');
            }
        }
    })
);

app.get('/', (req, res) => {
    res.send({ express: 'Yup' });
});

app.get('/api/getlist', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/postlist', (req, res) => {
    console.log(req.body);
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
