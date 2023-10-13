import { Match } from "@mon-petit-rugby/core";
import { Team } from "@mon-petit-rugby/core/entities/teamEntity";

export async function main() {
  await Team.put([
    {
      name: "Toulouse",
      players: ["Dupont", "Ntamack", "Kolbe"],
    },
    {
      name: "Racing 92",
      players: ["Russel", "Vakatawa", "Thomas"],
    },
    {
      name: "Clermont",
      players: ["Lopez", "Matsushima", "Raka"],
    },
  ]).go();

  await Match.put([
    {
      id: "1",
      home: "Toulouse",
      away: "Racing 92",
      status: "finished",
      dateTime: "2021-01-01T20:00:00.000Z",
      score: {
        home: "10",
        away: "20",
      },
    },
    {
      id: "2",
      home: "Clermont",
      away: "Toulouse",
      status: "pending",
      dateTime: "2024-01-02T20:00:00.000Z",
    },
  ]).go();

  return {
    statusCode: 200,
    body: { result: "ok" },
  };
}
