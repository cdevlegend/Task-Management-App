export type InitialTaskStateType = {
  count: number;
  time: number;
};

export type TaskConextType = {
  count: number;
  time: number;
  setCount: (v: number) => void;
  setTime: (v: number) => void;
};
