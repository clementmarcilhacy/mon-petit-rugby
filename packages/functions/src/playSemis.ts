import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async () => {
  await Match.put([
    {
      team1: "France",
      team2: "Fiji",
      winner: "team2",
      stage: "semiFinals",
    },
    {
      team1: "Wales",
      team2: "Ireland",
      winner: "team2",
      stage: "semiFinals",
    },
  ]).go();

  return {
    statusCode: 200,
    body: "matches simulated",
  };
});
