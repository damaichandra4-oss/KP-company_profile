import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3002;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Helper to initialize or read data.json
async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, JSON.stringify({}), 'utf8');
      return {};
    }
    throw err;
  }
}

// GET /api/data
app.get('/api/data', async (req, res) => {
  try {
    const data = await readData();
    res.json(data);
  } catch (err) {
    console.error('Error reading data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/data
app.post('/api/data', async (req, res) => {
  try {
    const { key, value } = req.body;
    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    const currentData = await readData();
    currentData[key] = value;
    
    await fs.writeFile(DATA_FILE, JSON.stringify(currentData, null, 2), 'utf8');
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`JSON API Server is running on http://localhost:${PORT}`);
});
