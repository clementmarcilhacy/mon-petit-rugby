import { Api, Table, StaticSite, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create the table
  const mainTable = new Table(stack, "MainTable", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: {
      partitionKey: "pk",
      sortKey: "sk",
    },
    stream: true,
    consumers: {
      matchResult: {
        function: "packages/functions/src/consumers/consumeMatchResult.main",
        filters: [
          {
            dynamodb: {
              Keys: { pk: { S: ["match"] } },
            },
          },
          {
            dynamodb: {
              Keys: { status: { S: ["finished"] } },
            },
          },
        ],
      },
    },
  });

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        // Bind the table name to our API
        bind: [mainTable],
      },
    },
    routes: {
      "POST /": "packages/functions/src/lambda.main",
      "POST /add-user-rankings": "packages/functions/src/addUserRankings.main",
      "POST /simulate-matches": "packages/functions/src/simulateMatches.main",
      "GET /get-matches": "packages/functions/src/getMatches.main",
      "GET /get-users-scores": "packages/functions/src/getUsersScores.main",
    },
  });

  // Deploy our React app
  const site = new StaticSite(stack, "ReactWebSite", {
    path: "packages/web",
    buildOutput: "dist",
    buildCommand: "npm run build",
    environment: {
      VITE_APP_API_URL: api.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
