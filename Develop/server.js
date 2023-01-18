const express = require('express');
const fs = require('fs');
const path = require('path');


let notes = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

//Static middleware
app.use(express.static('public'));

//HTML calls
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.json(notes)
);
//Post function to add new notes
app.post('/api/notes', (req, res) => {
    req.body.id = Math.floor(Math.random() * 1000000)
    notes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
});

// app.get('/api/notes/:id', (req, res) => {

// });
//Starts listen
app.listen(PORT, () =>
        console.log(`View at http://localhost:${PORT}`)
);