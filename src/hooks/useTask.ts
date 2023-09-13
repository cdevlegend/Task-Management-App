import { useContext } from "react";
import TaskContext from "src/contexts/TaskContext";

const useTask = () => {
  const conext = useContext(TaskContext);

  if (!conext) throw new Error("context must be use inside provider");

  return conext;
};

export default useTask;
