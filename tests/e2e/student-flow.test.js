const request = require('supertest');
const app = require('../../server');
const { readDB, writeDB } = require('../../server');

describe('Student Flow', () => {
  beforeEach(() => {
    // Reset test data
    const testData = {
      users: [],
      questions: [
        {
          id: 'q1',
          question: 'What is 2+2?',
          options: ['3', '4', '5'],
          answer: '4',
          type: 'multiple_choice'
        }
      ],
      results: []
    };
    writeDB(testData);
  });

  test('Complete quiz flow', async () => {
    // 1. Register
    const registerRes = await request(app)
      .post('/api/register')
      .send({
        name: 'Test Student',
        email: 'student@test.com',
        password: 'test123',
        role: 'Student'
      });
    
    // 2. Login
    const loginRes = await request(app)
      .post('/api/admin/login')
      .send({
        email: 'student@test.com',
        password: 'test123'
      });
    
    // 3. Take quiz
    const quizRes = await request(app)
      .post('/api/results')
      .set('Authorization', `Bearer ${loginRes.body.token}`)
      .send({
        studentName: 'Test Student',
        answers: [
          {
            questionId: 'q1',
            selectedAnswer: '4',
            isCorrect: true
          }
        ],
        score: 1,
        totalQuestions: 1
      });
    
    // Verify results
    expect(quizRes.status).toBe(201);
    expect(quizRes.body.score).toBe(1);
  });
});
