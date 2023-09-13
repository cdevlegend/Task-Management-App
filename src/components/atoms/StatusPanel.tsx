import { Box, Typography } from "@mui/material";
import { formatNumberWithDigitString } from "src/utils/format";

type Props = {
  title: string;
  value: number;
};

const StatusPanel = ({ title, value }: Props) => {
  return (
    <Box className="status-panel">
      <Typography fontSize={16}>{title}</Typography>
      <Typography fontSize={24} fontWeight={900} letterSpacing={1}>
        {value ? formatNumberWithDigitString(value) : 0}
      </Typography>
    </Box>
  );
};

export default StatusPanel;
