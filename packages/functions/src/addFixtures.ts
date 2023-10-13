import { Match } from "@mon-petit-rugby/core/entities/matchEntity";
import { Team } from "@mon-petit-rugby/core/entities/teamEntity";
import { User } from "@mon-petit-rugby/core/entities/userEntity";
import { ApiHandler } from "sst/node/api";

export const main = ApiHandler(async () => {
  await Team.put([
    {
      id: "WAL",
      name: "Wales",
    },
    {
      id: "ARG",
      name: "Argentina",
    },
    {
      id: "IRE",
      name: "Ireland",
    },
    {
      id: "NZL",
      name: "New Zealand",
    },
    {
      id: "ENG",
      name: "England",
    },
    {
      id: "FRA",
      name: "France",
    },
    {
      id: "FIJ",
      name: "Fiji",
    },
    {
      id: "RSA",
      name: "South Africa",
    },
  ]).go();

  await User.put([
    {
      name: "Clement",
      teamsRanking: [
        {
          teamId: "WAL",
          ranking: 1,
        },
        {
          teamId: "ARG",
          ranking: 2,
        },
        {
          teamId: "IRE",
          ranking: 3,
        },
        {
          teamId: "NZL",
          ranking: 4,
        },
        {
          teamId: "ENG",
          ranking: 5,
        },
        {
          teamId: "FRA",
          ranking: 6,
        },
        {
          teamId: "FIJ",
          ranking: 7,
        },
        {
          teamId: "RSA",
          ranking: 8,
        },
      ],
    },
  ]).go();

  console.log(
    JSON.stringify(
      Match.put([
        {
          id: "1",
          home: "Toulouse",
          away: "Racing 92",
          status: "finished",
          dateTime: "2021-01-01T20:00:00.000Z",
          score: {
            home: 10,
            away: 20,
          },
        },
      ]).params()
    )
  );

  await Match.put([
    {
      id: "amhflkjhfdlq",
      home: "Toulouse",
      away: "Racing 92",
      status: "finished",
      dateTime: "2021-01-01T20:00:00.000Z",
      score: {
        home: 10,
        away: 20,
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
    body: JSON.stringify({ result: "ok" }),
  };
});
