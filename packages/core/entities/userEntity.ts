import DynamoDB from "aws-sdk/clients/dynamodb";
import { Entity, EntityRecord } from "electrodb";
import { Table } from "sst/node/table";
import { TEAMS } from "./teamEntity";

const client = new DynamoDB.DocumentClient();

export const User = new Entity(
  {
    model: {
      entity: "user",
      version: "1",
      service: "main",
    },
    attributes: {
      name: {
        type: "string",
      },
      teamsRanking: {
        type: "list",
        items: {
          type: "map",
          properties: {
            team: {
              type: TEAMS,
            },
            ranking: {
              type: "number",
            },
          },
        },
      },
    },
    indexes: {
      name: {
        pk: {
          field: "pk",
          composite: [],
          template: "USER",
        },
        sk: {
          field: "sk",
          composite: ["name"],
        },
      },
    },
  },
  { table: Table.MainTable.tableName, client }
);

export type UserEntity = EntityRecord<typeof User>;
