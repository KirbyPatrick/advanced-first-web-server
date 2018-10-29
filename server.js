const express = require('express');
const app = express();
const port = 3000;
const state = require('./state.js');

app.get('/users', (req, res) => res.send(state));

app.get('/users/1', function (req, res) {
    res.send(state.users[0])
});

app.post('/users', function (req, res) {
    res.send('POST /users. Received: ' + req.body)
    users.push({
        _id: 6,
        name: "Bob",
        occupation: "Ninja",
        avatar: "http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg"
    });
    res.send(users[users.length - 1]);
});

app.listen(port, () => console.log(`example app listening on port ${port}`));