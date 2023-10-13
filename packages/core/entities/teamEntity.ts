import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity } from "electrodb";
import { Table } from "sst/node/table";

const client = new DynamoDB.DocumentClient();

export const Team = new Entity(
  {
    model: {
      entity: "team",
      version: "1",
      service: "main",
    },
    attributes: {
      name: {
        type: "string",
      },
      players: {
        type: "list",
        items: {
          type: "string",
        },
      },
    },
    indexes: {
      team: {
        pk: {
          field: "pk",
          composite: ["name"],
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
