import { Team } from "@mon-petit-rugby/core/entities/teamEntity";

export async function main() {
  const res = await Team.put([
    {
      id: "FRA",
    },
    {
      id: "RSA",
    },
    {
      id: "ENG",
    },
    {
      id: "FIJ",
    },
    {
      id: "IRE",
    },
    {
      id: "NZL",
    },
    {
      id: "WAL",
    },
    {
      id: "ARG",
    },
  ]).go();

  return {
    statusCode: 200,
    body: res,
  };
}
