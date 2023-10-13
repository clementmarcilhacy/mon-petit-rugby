import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Table } from "sst/node/table";
// Will be renamed Table in the official release 😉
import { TableV2 } from 'dynamodb-toolbox';

const dynamoDBClient = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export const mainTable = new TableV2({
  name: Table.Main.tableName,
  partitionKey: {
    name: 'pk',
    type: 'string', // 'string' | 'number' | 'binary'
  },
  sortKey: {
    name: 'sk',
    type: 'string',
  },
  documentClient,
});

