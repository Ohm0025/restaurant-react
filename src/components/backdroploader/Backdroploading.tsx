import { Backdrop, CircularProgress } from "@mui/material";

type Props = {
  isOpen: boolean;
};

const Backdroploading = ({ isOpen }: Props) => {
  return (
    <Backdrop
      open={isOpen}
      sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Backdroploading;
