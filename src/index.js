import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateStartupIdea(userInput) {
  try {
    const prompt = `Proponha uma ideia inovadora de startup com base no seguinte input: ${userInput}. Responda em português`;
    const result = await model.generateContent(prompt);

    return result.response.text().trim();
  } catch (error) {
    console.error('Erro ao gerar ideia de startup:', error);
    throw error;
  }
}

export { generateStartupIdea };
