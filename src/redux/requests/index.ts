import { user, createUsers } from '../../helpers/users';

export const requestGetUser = () => {
  const myPromise = new Promise<typeof user>((myResolve, myReject) => {
    myResolve(user); // when successful
    myReject(); // when error
  });
  return myPromise;
};
export const requestGetUsers = (count: number) => {
  const myPromise = new Promise((myResolve, myReject) => {
    const users = createUsers(count);
    myResolve(users); // when successful
    myReject(); // when error
  });
  return myPromise;
};
