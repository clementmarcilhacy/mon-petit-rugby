import { Match } from "@mon-petit-rugby/core";
import { Team } from "@mon-petit-rugby/core/entities/teamEntity";
import { User } from "@mon-petit-rugby/core/entities/userEntity";

export async function main() {
  await Team.put([
    {
      name: "Wales",
      players: ["Biggar", "Adams", "Williams"],
    },
    {
      name: "Argentina",
      players: ["Sanchez", "Moyano", "Cordero"],
    },
    {
      name: "Ireland",
      players: ["Sexton", "Stockdale", "Ringrose"],
    },
    {
      name: "New Zealand",
      players: ["Barrett", "Ioane", "Smith"],
    },
    {
      name: "England",
      players: ["Farrell", "May", "Watson"],
    },
    {
      name: "France",
      players: ["Dupont", "Ntamack", "Vakatawa"],
    },
    {
      name: "Fiji",
      players: ["Nadolo", "Tuisova", "Yato"],
    },
    {
      name: "South Africa",
      players: ["Kolisi", "De Klerk", "Le Roux"],
    },
  ]).go();

  await User.put([
    {
      name: "Clement",
      teamsRanking: [
        {
          team: "Wales",
          ranking: 1,
        },
        {
          team: "Argentina",
          ranking: 2,
        },
        {
          team: "Ireland",
          ranking: 3,
        },
        {
          team: "New Zealand",
          ranking: 4,
        },
        {
          team: "England",
          ranking: 5,
        },
        {
          team: "France",
          ranking: 6,
        },
        {
          team: "Fiji",
          ranking: 7,
        },
        {
          team: "South Africa",
          ranking: 8,
        },
      ],
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
