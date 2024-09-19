import express from 'express';
import cors from 'cors';
import { generateStartupIdea } from './index';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/startup-idea', async (req, res) => {
  const { question } = req.body;

  try {
    const idea = await generateStartupIdea(question);
    res.json({ answer: idea });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar ideia de startup.' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
