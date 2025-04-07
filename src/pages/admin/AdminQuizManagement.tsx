import { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import AdminLayout from '@components/AdminLayout';
import LoadingSpinner from '@components/LoadingSpinner';

export default function AdminQuizManagement() {
  const [isLoading, setIsLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setQuizzes([
          { id: 1, title: "Math Basics", category: "Mathematics", questions: 10 },
          { id: 2, title: "Science Quiz", category: "Science", questions: 15 }
        ]);
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (isLoading) {
    return (
      <AdminLayout>
        <LoadingSpinner />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quiz Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Plus className="w-5 h-5" />
          Add Quiz
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search quizzes..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Questions</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {quizzes.map((quiz) => (
              <tr key={quiz.id}>
                <td className="px-6 py-4">{quiz.title}</td>
                <td className="px-6 py-4">{quiz.category}</td>
                <td className="px-6 py-4">{quiz.questions}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-500 hover:text-blue-600 mr-4">Edit</button>
                  <button className="text-red-500 hover:text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
