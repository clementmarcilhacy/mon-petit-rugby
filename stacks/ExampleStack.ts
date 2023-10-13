import { Api, Table, StaticSite, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create the table
  const mainTable = new Table(stack, "MainTable", {
    fields: {
      name: "string",
    },
    primaryIndex: {
      partitionKey: "name",
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
      "POST /add-fixtures": "packages/functions/src/addFixtures.main",
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
