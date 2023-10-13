import { CountryList } from "../components/countries/CountryList";
import { Username } from "../components/user/Username";
import { Box } from "@mui/material";

export const Ranking = () => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Username />
      <CountryList />
    </Box>
  );
};
