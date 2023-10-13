import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async () => {
  await Match.put([
    // Quarter Finals
    {
      team1: "France" as const,
      team2: "South Africa" as const,
      winner: "France" as const,
    },
    {
      team1: "England" as const,
      team2: "Fiji" as const,
      winner: "England" as const,
    },
    {
      team1: "New Zealand" as const,
      team2: "Ireland" as const,
      winner: "Ireland" as const,
    },
    {
      team1: "Argentina" as const,
      team2: "Wales" as const,
      winner: "Wales" as const,
    },
    // Semi Finals
    {
      team1: "France" as const,
      team2: "England" as const,
      winner: "France" as const,
    },
    {
      team1: "Wales" as const,
      team2: "Ireland" as const,
      winner: "Ireland" as const,
    },
    // Final
    {
      team1: "France" as const,
      team2: "Ireland" as const,
      winner: "France" as const,
    },
  ]).go();

  return {
    statusCode: 200,
    body: "matches simulated",
  };
});
