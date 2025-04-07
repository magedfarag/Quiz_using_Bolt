import { useState } from 'react';
import { Settings, Clock, BookOpen, CheckCircle } from 'lucide-react';
import AdminLayout from '../components/AdminLayout';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    quizTimer: 30,
    maxQuestions: 10,
    passingScore: 70
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (settings.quizTimer < 10 || settings.quizTimer > 60) {
      newErrors.quizTimer = 'Quiz timer must be between 10 and 60 seconds';
    }
    if (settings.maxQuestions < 5 || settings.maxQuestions > 20) {
      newErrors.maxQuestions = 'Maximum questions must be between 5 and 20';
    }
    if (settings.passingScore < 50 || settings.passingScore > 100) {
      newErrors.passingScore = 'Passing score must be between 50 and 100';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      // Save settings logic
      console.log('Settings saved:', settings);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Clock className="w-6 h-6 text-blue-500" />
            <div className="flex-1">
              <h2 className="font-semibold">Quiz Timer Settings</h2>
              <p className="text-sm text-gray-600">Set default time limit for quizzes</p>
              <input
                type="number"
                name="quizTimer"
                value={settings.quizTimer}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.quizTimer ? 'border-red-500' : 'focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.quizTimer && <p className="text-red-500 text-sm">{errors.quizTimer}</p>}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BookOpen className="w-6 h-6 text-green-500" />
            <div className="flex-1">
              <h2 className="font-semibold">Maximum Questions</h2>
              <p className="text-sm text-gray-600">Set maximum number of questions per quiz</p>
              <input
                type="number"
                name="maxQuestions"
                value={settings.maxQuestions}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.maxQuestions ? 'border-red-500' : 'focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.maxQuestions && <p className="text-red-500 text-sm">{errors.maxQuestions}</p>}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CheckCircle className="w-6 h-6 text-purple-500" />
            <div className="flex-1">
              <h2 className="font-semibold">Scoring Parameters</h2>
              <p className="text-sm text-gray-600">Configure scoring rules and passing criteria</p>
              <input
                type="number"
                name="passingScore"
                value={settings.passingScore}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                  errors.passingScore ? 'border-red-500' : 'focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.passingScore && <p className="text-red-500 text-sm">{errors.passingScore}</p>}
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Save Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
