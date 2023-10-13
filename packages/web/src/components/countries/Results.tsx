import { Box, Typography } from "@mui/material";
import groupBy from "lodash/groupBy";

type Result = {
  country1: string;
  country2: string;
  stade: "quarter" | "semi" | "final";
  winner: "country1" | "country2";
};

const results: Result[] = [
  {
    country1: "France",
    country2: "South Africa",
    stade: "quarter",
    winner: "country1",
  },
  {
    country1: "Fidji",
    country2: "Wales",
    stade: "quarter",
    winner: "country2",
  },
  {
    country1: "Fidji",
    country2: "Wales",
    stade: "quarter",
    winner: "country2",
  },
  {
    country1: "Fidji",
    country2: "Wales",
    stade: "quarter",
    winner: "country2",
  },
  {
    country1: "Fidji",
    country2: "Wales",
    stade: "semi",
    winner: "country2",
  },
  {
    country1: "Fidji",
    country2: "Wales",
    stade: "final",
    winner: "country2",
  },
];

const GameResult = ({ result }: { result: Result }) => {
  return (
    <Box display="flex" sx={{ gap: "6px" }}>
      <Box
        sx={{
          color: "#212738",
        }}
      >
        {result.country1} - {result.country2} :
      </Box>
      <Box sx={{ color: "#F97068" }}>{result[result.winner]}</Box>
    </Box>
  );
};

export const Results = () => {
  const groupedResults = groupBy(results, ({ stade }) => stade);
  return (
    <Box
      sx={{
        maxHeight: "80%",
        color: "#D1D646",
        display: "flex",
        border: "1px solid",
        borderRadius: "5px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Finale</Typography>
      {groupedResults["final"].map((result, index) => (
        <GameResult key={index} result={result} />
      ))}
      <Typography variant="h5">Demi-finale</Typography>
      {groupedResults["semi"].map((result, index) => (
        <GameResult key={index} result={result} />
      ))}
      <Typography variant="h5">Quarts</Typography>
      {groupedResults["quarter"].map((result, index) => (
        <GameResult key={index} result={result} />
      ))}
    </Box>
  );
};
