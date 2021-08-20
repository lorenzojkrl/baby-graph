// Schema is a map of the relationship between data points on the graph
const graphql = require('graphql')

// const {
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLSchema
// } = graphql

// Create types
const UserType = new graphql.GraphQLObjectType({
  name: "User",
  description: "Documentation for user",
  // fields contains actual data of User
  // callback f return an object that specifies the types of props
  fields: () => ({
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt }
  })
})

// RootQuery
// RootQuery is the "path" that allows to reach nodes 
const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType", // for documentation purposes
  description: "",
  fields: { // this is going to be the query structure
    user: {
      type: UserType,
      args: { id: { type: graphql.GraphQLString } }, // we may want to pass some args e.g. id to retrieve a specific user
      resolve(parent, args) { // resolve with data. In this case, parents refer to UserType and args to the args obj
        // get & return data from a data source
      }
    }
  }
})

// export schema's query
module.exports = new graphql.GraphQLSchema({
  query: RootQuery
})