import express from 'express';
import { generateStartupIdea } from './api.js';

const router = express.Router();

router.post('/generate-idea', async (req, res) => {
  const { input } = req.body;
  const idea = await generateStartupIdea(input);
  res.json({ idea });
});

export default router;