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
      id: {
        type: "string",
        required: true,
      },
      name: {
        type: "string",
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
