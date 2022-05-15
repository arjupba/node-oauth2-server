const userMap = new Map();

// dummy user
userMap.set('username', {
  name: 'Arjun',
  userName: 'username',
  password: 'password',
});

export const createUser = (data) => userMap.set(data.userName, data);

export const getUsers = () =>
  [...userMap.entries()].map(([key, entry]) => entry);

export const authenticateUser = (userName, password) => {
  const user = userMap.get(userName);
  if (user && user.password === password) {
    return user;
  }
  return false;
};
