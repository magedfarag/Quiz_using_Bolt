import { Trophy, Star, CheckCircle, XCircle, Share } from 'lucide-react';
import { quizQuestions, achievements } from '../data/quizData';

const randomMathFacts = [
  "The number 142857 is special because when you multiply it by numbers 1-6, the result contains the same digits.",
  "A 'jiffy' is actually 1/100th of a second.",
  "Zero is the only number that can't be represented in Roman numerals.",
  "The opposite sides of a die always add up to seven.",
  "If you shuffle a deck of cards, chances are the order has never existed before in history."
];

export default function ResultsPage() {
  const score = 8;
  const totalQuestions = 10;
  const randomFact = randomMathFacts[Math.floor(Math.random() * randomMathFacts.length)];

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'My Quiz Results',
        text: `I scored ${score}/${totalQuestions} on Quizzy!`,
        url: window.location.href
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const getCategoryScores = () => {
    const categories = quizQuestions.reduce((acc, question) => {
      const category = question.category || 'General';
      if (!acc[category]) {
        acc[category] = { correct: 0, total: 0 };
      }
      acc[category].total++;
      if (question.answer === question.selectedAnswer) {
        acc[category].correct++;
      }
      return acc;
    }, {} as Record<string, { correct: number; total: number }>);

    return Object.entries(categories).map(([category, { correct, total }]) => ({
      category,
      score: `${correct}/${total}`
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Quiz Results</h1>
        
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600">
              {score}/{totalQuestions}
            </div>
            <div className="text-gray-600">
              You scored {((score / totalQuestions) * 100).toFixed(0)}%
            </div>
            <button
              onClick={handleShare}
              className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
              aria-label="Share results"
            >
              <Share className="w-5 h-5" />
              Share Results
            </button>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Score Breakdown</h2>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryScores().map(({ category, score }) => (
              <div key={category} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">{category}</div>
                <div className="text-blue-500">{score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Question Review */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Question Review</h2>
          <div className="space-y-4">
            {quizQuestions.map((question, index) => (
              <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium mb-2">
                  {index + 1}. {question.question}
                </div>
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <div
                      key={option}
                      className={`flex items-center gap-2 p-2 rounded ${
                        option === question.answer
                          ? 'bg-green-50'
                          : 'bg-gray-100'
                      }`}
                    >
                      {option === question.answer ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Math Fact */}
        <div className="mb-8">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-600">
              <Star className="w-5 h-5" />
              <div className="font-medium">Did You Know?</div>
            </div>
            <p className="mt-2 text-gray-600">{randomFact}</p>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Achievements Unlocked</h2>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                {achievement.icon === 'trophy' ? (
                  <Trophy className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Star className="w-6 h-6 text-yellow-500" />
                )}
                <div>
                  <div className="font-medium">{achievement.name}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
