import {GraphQLClient} from "graphql-request";

const client = new GraphQLClient('https://moviegraph.io/q', {
    headers: {
        Authorization: 'Api-Key$2b$04$rBKggZg1kaztMcjtj9VGC.5ipe2nGUHX8.pZ/mBudFqGepQd3/0Q6'
    }
});

export default client;