import { GoogleGenAI, Type } from "@google/genai";
import { MVPStrategy } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const modelId = 'gemini-3-flash-preview';

export const generateMVPStrategies = async (idea: string): Promise<MVPStrategy[]> => {
  if (!apiKey) throw new Error("API Key not found");

  const prompt = `
    Actúa como un consultor experto en Lean Startup.
    El usuario tiene la siguiente idea de negocio: "${idea}".
    Genera 3 estrategias concretas de MVP (Producto Mínimo Viable) para validar esta idea con el mínimo esfuerzo.
    Enfócate en experimentos reales (Landing page, Mago de Oz, Concierge, Crowdfunding, etc.).
    
    Devuelve la respuesta estrictamente en formato JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              effortLevel: { type: Type.STRING, enum: ['Bajo', 'Medio', 'Alto'] },
              validationType: { type: Type.STRING, enum: ['Interés', 'Valor', 'Crecimiento'] }
            },
            required: ['title', 'description', 'effortLevel', 'validationType']
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text) as MVPStrategy[];
  } catch (error) {
    console.error("Error generating MVP strategies:", error);
    throw error;
  }
};

export const chatWithMentor = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  if (!apiKey) throw new Error("API Key not found");

  const chat = ai.chats.create({
    model: modelId,
    history: history,
    config: {
      systemInstruction: "Eres Eric Ries, el autor de Lean Startup. Responde preguntas sobre la metodología de forma concisa, práctica y motivadora. Usa analogías simples.",
    }
  });

  try {
    const result = await chat.sendMessage({ message });
    return result.text || "Lo siento, no pude procesar tu respuesta.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Hubo un error al conectar con el mentor virtual.";
  }
};
