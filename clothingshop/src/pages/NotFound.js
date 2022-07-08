import StructerPages from "layout/StructerPages";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "35rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold" marginY="30px">
        Page Not Found
      </Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Box>
  );
};

export default StructerPages(NotFound);
