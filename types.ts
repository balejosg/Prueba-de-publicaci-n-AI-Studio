export enum Section {
  HERO = 'HERO',
  CONCEPTS = 'CONCEPTS',
  CYCLE = 'CYCLE',
  GENERATOR = 'GENERATOR',
  CHAT = 'CHAT'
}

export interface MVPStrategy {
  title: string;
  description: string;
  effortLevel: 'Bajo' | 'Medio' | 'Alto';
  validationType: 'Interés' | 'Valor' | 'Crecimiento';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
