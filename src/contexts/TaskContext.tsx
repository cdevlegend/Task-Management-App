import { createContext, ReactElement, useState } from "react";
import { InitialTaskStateType, TaskConextType } from "src/types/dashboard";

const initialState: InitialTaskStateType = {
  count: 0,
  time: 0,
};

const TaskContext = createContext<TaskConextType | null>(null);

export const TaskContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [taskState, setTaskState] =
    useState<InitialTaskStateType>(initialState);

  const setCount = (v: number) => {
    setTaskState({ ...taskState, count: v });
  };

  const setTime = (v: number) => {
    setTaskState({ ...taskState, time: v });
  };

  return (
    <TaskContext.Provider value={{ ...taskState, setCount, setTime }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext