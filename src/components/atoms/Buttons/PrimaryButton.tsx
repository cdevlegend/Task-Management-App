import { Button, useTheme } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler | undefined;
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  type?: "submit" | "reset" | "button" | undefined;
  delete?: boolean;
  disabled?: boolean;
};

export default function PrimaryButton(props: Props) {
  const theme = useTheme();
  return (
    <Button
      className={props.className ? props.className : ""}
      size={props.size}
      type={props.type}
      onClick={props.onClick}
      variant="contained"
      href=""
      disabled={props.disabled}
      sx={{
        bgcolor: props.delete
          ? theme.palette.error.main
          : theme.palette.primary.main,
        textTransform: "capitalize",
        fontFamily: "Poppins",
        "&:hover": {
          bgcolor: props.delete
            ? theme.palette.error.main
            : theme.palette.primary.main,
        },
      }}
    >
      {props.children}
    </Button>
  );
}
