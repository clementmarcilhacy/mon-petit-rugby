import { TextField, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const Username = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: "10px" }}>
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Your name" variant="standard" />
    </Box>
  );
};
