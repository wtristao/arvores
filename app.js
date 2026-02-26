const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Sample in-memory storage for tree locations
let treeLocations = [];

// Endpoint to get all tree locations
app.get('/trees', (req, res) => {
    res.json(treeLocations);
});

// Endpoint to add a new tree location
app.post('/trees', (req, res) => {
    const newTree = req.body;
    treeLocations.push(newTree);
    res.status(201).json(newTree);
});

// Function to save data to localStorage
function saveToLocalStorage(data) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('treeLocations', JSON.stringify(data));
    } else {
        console.log('Local storage is not supported.');
    }
}

// Function to save data to IndexedDB
function saveToIndexedDB(data) {
    // Implementation for IndexedDB would go here, this is a placeholder.
    console.log('Saving to IndexedDB...');
}

// Endpoint to persist data
app.post('/persist', (req, res) => {
    const dataToPersist = req.body;
    saveToLocalStorage(dataToPersist);
    saveToIndexedDB(dataToPersist);
    res.status(200).json({ message: 'Data persisted successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
