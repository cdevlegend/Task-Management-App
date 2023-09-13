import PrimaryButton from "src/components/atoms/Buttons/PrimaryButton";
import PrimaryOutlineButton from "src/components/atoms/Buttons/PrimaryOutlineButton";
import Dialog from "src/components/atoms/Dialog";
import { Grid } from "@mui/material";

type Props = {
  onDelete: () => any;
  open: boolean;
  onClose: () => void;
  message: string;
  btnText?: string;
};

export default function DeleteDialog(props: Props) {
  const { onDelete, open, onClose, message } = props;
  const deleteItem = () => {
    onDelete();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      actions={
        <Grid
          display={"flex"}
          className={"flex w-full"}
          sx={{ justifyContent: "right", gap: 1 }}
        >
          <PrimaryButton delete onClick={deleteItem}>
            {props.btnText ?? "Delete"}
          </PrimaryButton>
          <PrimaryOutlineButton onClick={onClose} className={"ml-2"}>
            Cancel
          </PrimaryOutlineButton>
        </Grid>
      }
    >
      {message}
    </Dialog>
  );
}
