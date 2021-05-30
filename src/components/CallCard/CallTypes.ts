export type Call = {
  name: string;
  photo: string;
  id: string | number;
  x: number;
  y: number;
  index: number;
};

export type Calls = Call[];

export type Card = {
  width: number;
  height: number;
  top: number;
  left: number;
};
