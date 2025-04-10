export const fetchQuestions = async () => {
  const response = await fetch('/api/questions');
  if (!response.ok) throw new Error('Failed to fetch questions');
  return response.json();
};

export const submitQuizResults = async (resultData) => {
  const response = await fetch('/api/results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resultData)
  });
  if (!response.ok) throw new Error('Failed to submit quiz');
  return response.json();
};
