const graphql = require('graphql')

// Scalar Type e.g. primitives
/*
String
Int
Float
Boolean
ID: unique identifier
*/

const PersonType = new graphql.GraphQLObjectType({
  name: "PersonType",
  description: "Describe PersonType Object",
  // fields can be seen as attributes
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    age: { type: graphql.GraphQLInt },
    isMale: { type: graphql.GraphQLBoolean },
    gpa: { type: graphql.GraphQLFloat }
  })
})

const RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Description',
  fields: {
    person: {
      type: PersonType,
      resolve(parent, args) {
        let personObj = {
          name: "Antonio",
          age: 45,
          isMale: true,
          gpa: 3.45
        }
        return personObj
      }
    }
  }
})

// export schema's query
module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
})