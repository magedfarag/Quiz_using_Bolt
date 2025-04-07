/**
 * QuizPage component - Displays quiz questions and handles navigation
 * @component
 * @returns {JSX.Element} The rendered QuizPage component
 */
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, SkipForward } from 'lucide-react';
import { quizQuestions } from '../data/quizData';
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestion]);

  /**
   * Handles navigation to the next question
   * @function
   */
  const handleNext = () => {
    if (!selectedAnswer) {
      setError('Please select an answer before proceeding');
      return;
    }
    setError('');
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      navigate('/results');
    }
  };

  /**
   * Handles skipping the current question
   * @function
   */
  const handleSkip = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      navigate('/results');
    }
  };

  /**
   * Handles navigation to the previous question
   * @function
   */
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    }
  };

  const currentQuiz = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </div>
          <div className="flex items-center gap-2 text-blue-500">
            <Clock className="w-5 h-5" aria-hidden="true" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            aria-label={`Progress: ${((currentQuestion + 1) / quizQuestions.length) * 100}%`}
          ></div>
        </div>

        <h2 className="text-xl font-semibold mb-6">{currentQuiz.question}</h2>

        <div className="space-y-3">
          {currentQuiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all
                ${
                  selectedAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              aria-label={`Option ${index + 1}: ${option}`}
            >
              {option}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mt-4" role="alert">{error}</p>}

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Previous question"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleSkip}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
              aria-label="Skip question"
            >
              Skip
              <SkipForward className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              aria-label={currentQuestion === quizQuestions.length - 1 ? 'Finish quiz' : 'Next question'}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
