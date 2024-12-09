const express = require('express');
const port = process.env.PORT //

const app = express();

//Task 2
// Create Basic Routes
// - Set up a homepage route ("/") that displays "Welcome to Express"
// - Create an "about" route ("/about") that shows basic information
// - Test both routes in the browser


app.get('/', (req, res) => {
    res.send('welcome to Express')
});

app.get('/about', (req, res) => {
    res.send('about')
});


// number 3
app.get('/greet/idongesit', (req, res) => {
    res.send('Hello Idongsit!')
});

let users = [
    {id: 1, name: "Idongesit"},
    {id: 2, name: "Glory"},
    {id: 3, name: "Bernice"},
    {id: 4, name:"Esther"},
    {id: 5, name: "Mfon"}
];
app.get('/api/users', (req, res) => {
    res.json(users)

    if (!users) {
        res.status(404).json('page not found')}
    else {
        res.status(200).json()
    }   
});

app.listen(3000, ()  => console.log('The server is running successfully'));
