export type User = { name: string; photo: string; };
export type UsersState = User[];

export interface Position { x: number; y: number; id: string; }
export type Positions = Position[];

// Action types

interface SetUserAction {
  type: 'SET_USER';
  user: User
}

interface AddUserAction {
  type: 'ADD_USER';
}

interface AddPositionAction {
  type: 'ADD_POS';
}

interface SetPositionAction {
  type: 'SET_POS';
  position: Position;
}

export type Action = SetUserAction | AddUserAction | AddPositionAction | SetPositionAction;
