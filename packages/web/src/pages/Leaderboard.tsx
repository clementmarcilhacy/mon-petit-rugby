import { Box } from "@mui/material";
import { PlayerLeaderboard } from "../components/PlayerLeaderboard";
import { Results } from "../components/countries/Results";

export const Leaderboard = () => {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <h1>Leaderboard 🏆</h1>
      <Box display="flex" sx={{ width: "100%", gap: "20px" }}>
        <Results />
        <PlayerLeaderboard />
      </Box>
    </Box>
  );
};
