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
      home: { type: "string", required: true },
      away: { type: "string", required: true },
      status: { type: "string", required: true },
      dateTime: { type: "string", required: true },
      score: {
        type: "map",
        properties: {
          home: { type: "number" },
          away: { type: "number" },
        },
      },
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
          composite: ["id"],
        },
      },
    },
  },
  { table: Table.MainTable.tableName, client }
);
