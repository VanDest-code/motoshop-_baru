// Simple auth utility for demo purposes
export const users = {
  admin: {
    username: 'admin123',
    password: '12345',
    role: 'admin',
  },
  user: {
    username: 'user123',
    password: '12345',
    role: 'user',
  },
};

export const authenticate = (username: string, password: string) => {
  // Admin
  if (username === users.admin.username && password === users.admin.password) {
    return { user: users.admin, role: 'admin' };
  }
  
  // User
  if (username === users.user.username && password === users.user.password) {
    return { user: users.user, role: 'user' };
  }

  return null;
};