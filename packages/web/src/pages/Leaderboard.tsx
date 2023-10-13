import { CountryList } from "../components/countries/CountryList";
import { Username } from "../components/user/Username";
import { Box } from "@mui/material";

export const Leaderboard = () => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Username />
      <CountryList />
    </Box>
  );
};
