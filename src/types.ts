export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For multiple choice
  correctAnswer?: string; // For short answer and true/false
  answer?: boolean; // For true/false
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}
