const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

const { User } = require('../../src/app/models');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  })

  it('Should encrypt user password', async () => {
    const user = await User.create({ 
      name: 'Henrique', 
      email: 'henrique@gmail.com', 
      password: '123'
    });
    
    const compareHash = await bcrypt.compare('123', user.password_hash);
    
    expect(compareHash).toBe(true);
  })
})
