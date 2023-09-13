import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RedTextButton from "src/components/atoms/Buttons/RedTextButton";
import { makeStyles } from "@mui/styles";
import DeleteDialog from "../Dialogs/DeleteDialog";
import useTask from "src/hooks/useTask";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "2px solid gray !important",
    },
  },
});

export default function TaskTable() {
  const classes = useStyles();
  const { taskList, deleteTask } = useTask();

  const [openDelDlg, setOpenDelDlg] = React.useState<boolean>(false);
  const [selectedItemIdx, setSelectedItemIdx] = React.useState<number>(-1);

  const onClose = () => {
    setOpenDelDlg(false);
  };

  const openDeleteDlg = (taskIdx: number) => {
    setSelectedItemIdx(taskIdx);
    setOpenDelDlg(true);
  };

  const handleDelete = () => {
    deleteTask(selectedItemIdx);
    setOpenDelDlg(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell width={"70%"}>Task Title</TableCell>
            <TableCell width={"20%"}>Time Required(in Hrs)</TableCell>
            <TableCell width={"10%"}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskList?.map((taskItem, index: number) => (
            <TableRow
              key={taskItem.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{taskItem.title}</TableCell>
              <TableCell>{taskItem.time}</TableCell>
              <TableCell>
                <RedTextButton onClick={() => openDeleteDlg(index)}>
                  Delete
                </RedTextButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteDialog
        open={openDelDlg}
        onDelete={handleDelete}
        onClose={onClose}
        message="Do you want to delete this task?"
      />
    </TableContainer>
  );
}
