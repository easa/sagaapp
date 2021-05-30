import { Action, User, UsersState } from '../stateTypes';

export const addUser = (user: User) => ({
  type: 'SET_USER',
  user,
});

export default (state: UsersState = [], action: Action) => {
  const callCount = state.length;
  switch (action.type) {
    case 'SET_USER':
      return (callCount > 11) ? state : [...state, action.user];
    default:
      return state;
  }
};
