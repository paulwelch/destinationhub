// graphql.config.js
module.exports = {
    projects: {
      dest: {
        schema: ["./destination-svc/schema.graphql"],
        documents: ["./**/*.{graphql,js,ts,jsx,tsx}"],
        extensions: {
          endpoints: {
            default: {
              url: "http://localhost:3000/api/graphql",
              //headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
            },
          },
        },
      },
    },
  }