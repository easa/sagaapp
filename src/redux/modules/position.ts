import type { Action, Position, Positions } from '../stateTypes';

export const addPosition = (position: Position) => ({
  type: 'SET_POS',
  position,
});

export default (state: Positions = [], action: Action) => {
  if (action.type === 'SET_POS') {
    const { x, y, id } = action.position;
    const item = state.find((i) => i.id === id);
    if (item) {
      const newState = state.map((i) => {
        if (i.id === id) return { id, x, y };
        return i;
      });
      return newState;
    }
    const newItem = { x, y, id };
    return [...state, newItem];
  }
  return state;
};
