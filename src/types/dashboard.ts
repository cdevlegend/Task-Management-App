export type TaskType = {
  title: string;
  time: number;
};

export type InitialTaskStateType = {
  count: number;
  time: number;
  taskList: Array<TaskType>;
};

export type TaskConextType = {
  count: number;
  time: number;
  taskList: Array<TaskType>;
  deleteTask: (id: number) => void;
  addTask: (task: TaskType) => void;
};
