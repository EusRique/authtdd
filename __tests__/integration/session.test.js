const { User } = require('../../src/app/models')

describe('Authentication', () => {
  it('Should receive ', async () => {
    const user = await User.create({ name: 'Amanda', email: 'amanda@gmail.com', password_hash: '123'});
    
    console.log(user);

    expect(user.email).toBe("amanda@gmail.com");
  });
})