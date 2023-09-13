import { Stack, Typography } from "@mui/material";
import StatusPanel from "src/components/atoms/StatusPanel";
import TextField from "src/components/molecules/Inputs/TextField";
import {
  TaskAddFormDefaultValues,
  TaskStatusTypeList,
} from "src/consts/dashboard";
import useTask from "src/hooks/useTask";
import { getTaskValue } from "src/utils/task";
import { useForm, FieldValues } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "src/components/atoms/Buttons/PrimaryButton";
import TaskTable from "src/components/molecules/Tables/TaskTable";

const schema = yup.object({
  title: yup.string().max(128).required("Title should not be empty"),
  time: yup.number().min(0).max(24).required("Time should not be 0"),
});

const DashboardLayout = () => {
  const { count, time, addTask } = useTask();
  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    defaultValues: TaskAddFormDefaultValues,
    resolver: yupResolver(schema),
  });

  const handleAddTask = (v: FieldValues) => {
    addTask({
      title: v.title,
      time: v.time,
    });
    reset({
      title: "",
      time: 0,
    });
  };

  return (
    <Stack direction={"column"} spacing={3} p={3}>
      <Typography>Task Management App</Typography>
      <Stack direction={"row"} justifyContent={"left"} gap={4}>
        {TaskStatusTypeList.map((item) => (
          <StatusPanel
            key={item.id}
            title={item.title}
            value={getTaskValue(item.id, count, time)}
          />
        ))}
      </Stack>
      <Stack direction={"row"} gap={5}>
        <TextField
          className="w-300"
          control={control}
          label="Task title"
          name="title"
        />
        <TextField
          className="w-300"
          control={control}
          label="Task required(in Hrs)"
          type="number"
          name="time"
        />
        <PrimaryButton onClick={handleSubmit(handleAddTask)}>Add</PrimaryButton>
      </Stack>
      <Stack gap={2}>
        <Typography>Todo List</Typography>
        <TaskTable />
      </Stack>
    </Stack>
  );
};

export default DashboardLayout;
