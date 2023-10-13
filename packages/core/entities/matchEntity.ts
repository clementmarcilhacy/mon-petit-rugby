import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity } from "electrodb";
import { Table } from "sst/node/table";

const client = new DynamoDB.DocumentClient();

export const Match = new Entity(
  {
    model: {
      entity: "match",
      version: "1",
      service: "main",
    },
    attributes: {
      id: { type: "string" },
      home: { type: "string" },
      away: { type: "string" },
      status: { type: "string" },
      dateTime: { type: "string" },
      score: {
        type: "map",
        properties: {
          home: { type: "string" },
          away: { type: "string" },
        },
      },
    },
    indexes: {
      team: {
        pk: {
          field: "pk",
          template: "match",
          composite: [],
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
