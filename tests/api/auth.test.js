const request = require('supertest');
const app = require('../../server');
const { readDB } = require('../../server');

describe('Auth API', () => {
  beforeEach(() => {
    // Reset test database
  });

  test('Register new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        role: 'Student'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  // Add more test cases
});
