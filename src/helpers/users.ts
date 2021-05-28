import image from './images/profilePhoto.jpg';

const user = {
  name: 'alex baxter',
  photo: image,
};

const users = function createUsers(count: number = 1) {
  if (count > 12 || count < 1) {
    throw Error('should be between 1 to 12');
  }
  const placeHolder = Array(count).fill(user).map((u) => ({ ...u, id: Math.random() }));
  return placeHolder;
};

export default users;
