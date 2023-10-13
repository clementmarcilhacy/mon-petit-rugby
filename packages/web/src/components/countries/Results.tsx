import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";

import groupBy from "lodash/groupBy";

type Result = {
  team1: string;
  team2: string;
  stage: "quarter" | "semi" | "final";
  winner: "team1" | "team2";
};

const getMatchesResults = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/get-matches`
  );

  return response.json();
};

const GameResult = ({ result }: { result: Result }) => {
  return (
    <Box display="flex" sx={{ gap: "6px" }}>
      <Box
        sx={{
          color: "#212738",
        }}
      >
        {result.team1} - {result.team2} :
      </Box>
      <Box sx={{ color: "#F97068" }}>{result[result.winner]}</Box>
    </Box>
  );
};

export const Results = () => {
  const { data, status } = useQuery("matches", getMatchesResults);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const groupedResults = groupBy(data.data, ({ stage }) => stage);

  return (
    <Box
      sx={{
        maxHeight: "80%",
        display: "flex",
        border: "1px solid",
        borderRadius: "5px",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#D1D646",
        }}
      >
        Finale
      </Typography>
      {groupedResults["final"]?.map((result, index) => (
        <GameResult key={index} result={result} />
      )) ?? <p>Pas encore de résultats</p>}
      <Typography
        variant="h5"
        sx={{
          color: "#D1D646",
        }}
      >
        Demi-finale
      </Typography>
      {groupedResults["semiFinals"]?.map((result, index) => (
        <GameResult key={index} result={result} />
      )) ?? <p>Pas encore de résultats</p>}
      <Typography
        variant="h5"
        sx={{
          color: "#D1D646",
        }}
      >
        Quarts
      </Typography>
      {groupedResults["quarterFinals"]?.map((result, index) => (
        <GameResult key={index} result={result} />
      ))}
    </Box>
  );
};
