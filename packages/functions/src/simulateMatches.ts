import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async () => {
  await Match.put([
    // Quarter Finals
    {
      team1: "France",
      team2: "South Africa",
      winner: "France",
      stage: "quarterFinals",
    },
    {
      team1: "England",
      team2: "Fiji",
      winner: "England",
      stage: "quarterFinals",
    },
    {
      team1: "New Zealand",
      team2: "Ireland",
      winner: "Ireland",
      stage: "quarterFinals",
    },
    {
      team1: "Argentina",
      team2: "Wales",
      winner: "Wales",
      stage: "quarterFinals",
    },
    // Semi Finals
    {
      team1: "France",
      team2: "England",
      winner: "France",
      stage: "semiFinals",
    },
    {
      team1: "Wales",
      team2: "Ireland",
      winner: "Ireland",
      stage: "semiFinals",
    },
    // Final
    {
      team1: "France",
      team2: "Ireland",
      winner: "France",
      stage: "final",
    },
  ]).go();

  return {
    statusCode: 200,
    body: "matches simulated",
  };
});
