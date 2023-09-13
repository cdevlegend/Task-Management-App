import { InitialTaskStateType } from "src/types/dashboard";

export const getTaskValue = (id: number, task: InitialTaskStateType) => {
  switch (id) {
    case 1:
      return task.count;
    case 2:
      return Math.ceil(task.time / 8);
    default:
      return task.time;
  }
};
