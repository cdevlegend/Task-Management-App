import { createContext, ReactElement, useState } from "react";
import {
  InitialTaskStateType,
  TaskConextType,
  TaskType,
} from "src/types/dashboard";

const initialState: InitialTaskStateType = {
  count: 0,
  time: 0,
  taskList: [],
};

const TaskContext = createContext<TaskConextType | null>(null);

export const TaskContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [taskState, setTaskState] =
    useState<InitialTaskStateType>(initialState);

  const deleteTask = (taskIdx: number) => {
    const task_arr = [...taskState.taskList];
    const [deleted_task] = task_arr.splice(taskIdx, 1);
    const newState = {
      count: taskState.count - 1,
      time: taskState.time - deleted_task.time,
      taskList: task_arr,
    };
    setTaskState(newState);
  };

  const addTask = (task: TaskType) => {
    const task_arr = [...taskState.taskList, task];
    const newState = {
      count: taskState.count + 1,
      time: taskState.time + task.time,
      taskList: task_arr,
    };

    setTaskState(newState);
  };

  return (
    <TaskContext.Provider value={{ ...taskState, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
