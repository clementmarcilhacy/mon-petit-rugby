import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity } from "electrodb";
import { type } from "os";
import { Table } from "sst/node/table";

const client = new DynamoDB.DocumentClient();

export const TEAMS = [
  "Wales",
  "Argentina",
  "Ireland",
  "New Zealand",
  "England",
  "France",
  "Fiji",
  "South Africa",
] as const;

export const STATUSES = [
  "quarterFinalist",
  "semiFinalist",
  "finalist",
  "worldChampion",
] as const;
export type Status = (typeof STATUSES)[number];

export const Team = new Entity(
  {
    model: {
      entity: "team",
      version: "1",
      service: "main",
    },
    attributes: {
      id: {
        type: TEAMS,
        required: true,
      },
      name: {
        type: TEAMS,
        required: true,
      },
      status: {
        type: STATUSES,
        required: true,
      },
    },
    indexes: {
      team: {
        pk: {
          field: "pk",
          composite: [],
          template: "TEAM",
        },
        sk: {
          field: "sk",
          composite: ["id"],
        },
      },
    },
  },
  { table: Table.MainTable.tableName, client }
);
