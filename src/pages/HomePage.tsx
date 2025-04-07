/**
 * HomePage component - The entry point for students
 * @component
 * @returns {JSX.Element} The rendered HomePage component
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smile } from 'lucide-react';

export default function HomePage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  /**
   * Handles the start quiz action
   * @function
   */
  const handleStartQuiz = () => {
    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    if (!nameRegex.test(name)) {
      setError('Please enter a valid name (2-30 letters)');
      return;
    }
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="flex justify-center" aria-hidden="true">
            <div className="bg-blue-500 p-4 rounded-full">
              <Smile className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Quizzy!</h1>
          <p className="text-gray-600">Enter your name to start the quiz</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
            aria-label="Enter your name"
            onKeyDown={(e) => e.key === 'Enter' && handleStartQuiz()}
          />
          {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
          <button
            onClick={handleStartQuiz}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            aria-label="Start quiz"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
