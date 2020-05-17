const request = require('supertest');
const app = require("../../src/app");

const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('Should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: "Henrique",
      email: "henrique@gmail.com",
      password_hash: "123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "1234"
      });
    
      expect(response.status).toBe(200);
  })
});