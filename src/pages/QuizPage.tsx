import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchQuestions, submitQuizResults } from '@/api/quiz';
import { quizQuestions } from '@/data/quizData';

export default function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { studentName, questions: initialQuestions } = location.state || {};
  const [questions, setQuestions] = useState(initialQuestions || []);

  useEffect(() => {
    if (!questions.length) {
      fetchQuestions()
        .then(setQuestions)
        .catch(() => setQuestions(quizQuestions));
    }
  }, []);

  const handleQuizComplete = async (score, answers) => {
    try {
      await submitQuizResults({
        studentName,
        score,
        totalQuestions: questions.length,
        answers,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Failed to save results:', error);
    }
    navigate('/results', { state: { score, totalQuestions: questions.length, answers } });
  };

  // ... rest of the component
}
