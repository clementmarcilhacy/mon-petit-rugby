import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async () => {
  await Match.put([
    // Final
    {
      team1: "Fiji",
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
