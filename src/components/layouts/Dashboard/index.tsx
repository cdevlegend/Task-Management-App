import { Grid, Stack, Typography } from "@mui/material";
import StatusPanel from "src/components/atoms/StatusPanel";
import { TaskStatusTypeList } from "src/consts/dashboard";
import useTask from "src/hooks/useTask";
import { getTaskValue } from "src/utils/task";

const DashboardLayout = () => {
  const task = useTask();

  return (
    <Stack direction={"column"} spacing={3} p={3}>
      <Typography>Task Management App</Typography>
      <Stack direction={"row"} justifyContent={"left"} gap={4}>
        {TaskStatusTypeList.map((item) => (
          <StatusPanel
            key={item.id}
            title={item.title}
            value={getTaskValue(item.id, task)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default DashboardLayout;
