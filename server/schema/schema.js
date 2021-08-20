// Schema is a map of the relationship between data points on the graph
const graphql = require('graphql')

// const {
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLString,
//   GraphQLInt
// } = graphql

// Create types
const UserType = new graphql.GraphQLObjectType({
  name: "User",
  description: "Documentation for user",
  // fields contains actual data of User
  // callback f return an object that specifies the types of props
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt }
  })
})