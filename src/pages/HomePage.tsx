// ... (previous imports)
import { fetchQuestions } from '@/api/quiz';

export default function HomePage() {
  // ... (previous state)

  const handleStartQuiz = async () => {
    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    if (!nameRegex.test(name)) {
      setError('Please enter a valid name (2-30 letters)');
      return;
    }

    try {
      const questions = await fetchQuestions();
      navigate('/quiz', { state: { studentName: name, questions } });
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      // Fallback to mock data
      navigate('/quiz', { state: { studentName: name, questions: quizQuestions } });
    }
  };

  // ... (rest of the component)
}
