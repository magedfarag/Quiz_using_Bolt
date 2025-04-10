const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export const fetchDashboardStats = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/stats`);
  if (!response.ok) throw new Error('Failed to fetch dashboard stats');
  return response.json();
};

export const fetchQuizStats = async () => {
  const response = await fetch(`${API_BASE_URL}/results/stats`);
  if (!response.ok) throw new Error('Failed to fetch quiz stats');
  return response.json();
};

export const fetchQuestionStats = async () => {
  const response = await fetch(`${API_BASE_URL}/questions/stats`);
  if (!response.ok) throw new Error('Failed to fetch question stats');
  return response.json();
};

export const fetchUserResults = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/results/user/${userId}`);
  if (!response.ok) throw new Error('Failed to fetch user results');
  return response.json();
};
