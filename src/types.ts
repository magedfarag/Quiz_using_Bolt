export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  category?: string;
  selectedAnswer?: string;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: 'trophy' | 'star';
}

export interface AdminStats {
  totalQuizzes: number;
  activeUsers: number;
  averageScore: number;
}
