import { Team } from "@mon-petit-rugby/core/entities/teamEntity";

export async function main() {
  const res = await Team.put([
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

  return {
    statusCode: 200,
    body: res,
  };
}
