import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async () => {
  await Match.put([
    // Quarter Finals
    {
      team1: "France",
      team2: "South Africa",
      winner: "team1",
      stage: "quarterFinals",
    },
    {
      team1: "England",
      team2: "Fiji",
      winner: "team1",
      stage: "quarterFinals",
    },
    {
      team1: "New Zealand",
      team2: "Ireland",
      winner: "team2",
      stage: "quarterFinals",
    },
    {
      team1: "Argentina",
      team2: "Wales",
      winner: "team2",
      stage: "quarterFinals",
    },
    // Semi Finals
    {
      team1: "France",
      team2: "England",
      winner: "team1",
      stage: "semiFinals",
    },
    {
      team1: "Wales",
      team2: "Ireland",
      winner: "team2",
      stage: "semiFinals",
    },
    // Final
    {
      team1: "France",
      team2: "Ireland",
      winner: "team1",
      stage: "final",
    },
  ]).go();

  return {
    statusCode: 200,
    body: "matches simulated",
  };
});
