import { Api, Table, StaticSite, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create the table
  const table = new Table(stack, "Counter", {
    fields: {
      counter: "string",
    },
    primaryIndex: { partitionKey: "counter" },
  });

  const mainTable = new Table(stack, 'Main', {
    fields: {
      pk: 'string',
      sk: 'string'
    },
    primaryIndex: {
      partitionKey: 'pk',
      sortKey: 'sk'
    }
  })

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        // Bind the table name to our API
        bind: [table],
      },
    },
    routes: {
      "POST /": "packages/functions/src/lambda.main",
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
