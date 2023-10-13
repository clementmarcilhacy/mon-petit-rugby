import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity } from "electrodb";
import { Table } from "sst/node/table";
import { TEAMS } from "./teamEntity";

const client = new DynamoDB.DocumentClient();

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
      winner: { type: TEAMS, required: true },
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
          composite: [],
        },
      },
    },
  },
  { table: Table.MainTable.tableName, client }
);
