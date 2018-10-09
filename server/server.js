const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'page not found',
        name: 'Todo App'
    });
});

app.get('/users', (req, res) => {
    var users = [
        {name: 'Ankit', age: 26},
        {name: 'Piyush', age: 28}
    ];
    res.send(users);
})

app.listen(3000, () => {
    console.log('Application started')
});

module.exports.app = app;