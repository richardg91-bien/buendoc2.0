export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Challenge API',
            version: '1.0.0',
            description: "Challenge API Buendoc",
        },
        servers: [
            {
                url: "http://locahost:3000"
            },
        ],
    },
    apis: ["./src/routes/*.ts"]
};