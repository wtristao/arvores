const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'trees.json');

app.use(cors());
app.use(bodyParser.json());
// Serve static files (index.html, etc.) from repo root
app.use(express.static(path.join(__dirname)));

function ensureDataFile() {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

function loadTrees() {
    ensureDataFile();
    try {
        const raw = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(raw || '[]');
    } catch (err) {
        console.error('Error reading trees file:', err);
        return [];
    }
}

function saveTrees(trees) {
    ensureDataFile();
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(trees, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing trees file:', err);
    }
}

// API: get all trees
app.get('/api/trees', (req, res) => {
    const trees = loadTrees();
    res.json(trees);
});

// API: add a tree
app.post('/api/trees', (req, res) => {
    const { lat, lng, fruta, user } = req.body;
    if (typeof lat !== 'number' || typeof lng !== 'number' || !fruta) {
        return res.status(400).json({ error: 'Request must include numeric lat, lng and fruta' });
    }

    const trees = loadTrees();
    const newTree = {
        id: Date.now(),
        lat,
        lng,
        fruta,
        user: user || null,
        createdAt: new Date().toISOString()
    };
    trees.push(newTree);
    saveTrees(trees);
    res.status(201).json(newTree);
});

// Optional: update a tree
app.put('/api/trees/:id', (req, res) => {
    const id = Number(req.params.id);
    const trees = loadTrees();
    const idx = trees.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    const { lat, lng, fruta, user } = req.body;
    if (lat !== undefined) trees[idx].lat = lat;
    if (lng !== undefined) trees[idx].lng = lng;
    if (fruta !== undefined) trees[idx].fruta = fruta;
    if (user !== undefined) trees[idx].user = user;
    trees[idx].updatedAt = new Date().toISOString();
    saveTrees(trees);
    res.json(trees[idx]);
});

// Optional: delete a tree
app.delete('/api/trees/:id', (req, res) => {
    const id = Number(req.params.id);
    let trees = loadTrees();
    const before = trees.length;
    trees = trees.filter(t => t.id !== id);
    if (trees.length === before) return res.status(404).json({ error: 'Not found' });
    saveTrees(trees);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
