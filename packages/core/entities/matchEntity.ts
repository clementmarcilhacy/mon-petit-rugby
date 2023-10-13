import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity, EntityRecord } from "electrodb";
import { Table } from "sst/node/table";
import { TEAMS } from "./teamEntity";

const client = new DynamoDB.DocumentClient();

const STAGES = ["quarterFinals", "semiFinals", "final"] as const;
const WINNER = ["team1", "team2"] as const;

export const Match = new Entity(
  {
    model: {
      entity: "match",
      version: "1",
      service: "main",
    },
    attributes: {
      team1: { type: TEAMS, required: true },
      team2: { type: TEAMS, required: true },
      winner: { type: WINNER, required: true },
      stage: { type: STAGES, required: true },
    },
    indexes: {
      match: {
        pk: {
          field: "pk",
          composite: [],
          template: "MATCH",
        },
        sk: {
          field: "sk",
          composite: ["team1", "team2"],
        },
      },
    },
  },
  { table: Table.MainTable.tableName, client }
);

export type MatchRecord = EntityRecord<typeof Match>;
