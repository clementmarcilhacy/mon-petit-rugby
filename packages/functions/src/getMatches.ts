import { Match } from "@mon-petit-rugby/core/entities/matchEntity";

export async function main() {
  const res = await Match.get([
    {
      home: "FRA",
      away: "RSA",
      winner: null,
      score: null
    },
    {
      home: "ENG",
      away: "FIJ",
      winner: null,
      score: null
    }
  ]).go();

  return {
    statusCode: 200,
    body: res,
  };
}
