// Schema is a map of the relationship between data points on the graph
const graphql = require('graphql')
var _ = require('lodash')
// dummy data
// users in usersData have the fields declared in UserType
let usersData = [
  { id: '654', age: 54, name: "Sami", height: 187 },
  { id: '652', age: 44, name: "Samuel", height: 178 },
  { id: '653', age: 34, name: "Samantha", height: 157 },
  { id: '651', age: 44, name: "Sam", height: 177 }
]

let hobbiesData = [
  { id: '454', title: 'Rowing', description: "Strenghten your arms", userId: "651" },
  { id: '452', title: "Knitting", description: "Move your hands", userId: "652" },
  { id: '453', title: "Eating", description: "Open your mouth", userId: "653" },
  { id: '451', title: "Hiking", description: "Wear boots and walk", userId: "654" }
]

let postData = [
  { id: '354', title: 'J. K. Rowing', comment: "The sky is blue", userId: "654" },
  { id: '352', title: 'Motonet is cheap', comment: "The sky is a bike", userId: "654" },
  { id: '351', title: 'JKRL', comment: "Blue is the way", userId: "653" },
  { id: '350', title: 'Building A Mind', comment: "Mind is the way", userId: "652" },
  { id: '355', title: 'Travellers', comment: "One way or another", userId: "651" },


]

// const {
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLSchema,
//   GraphQLList,
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
    age: { type: graphql.GraphQLInt },
    height: { type: graphql.GraphQLInt },
    // Query user's posts
    posts: {
      type: new graphql.GraphQLList(PostType),
      resolve(parent, args) {
        return _.filter(postData, { userId: parent.id })
      }
    },
    // Query user's hobbies
    hobbies: {
      type: new graphql.GraphQLList(HobbyType),
      resolve(parent, args) {
        return _.filter(hobbiesData, { userId: parent.id })
      }
    }
  })
})

const HobbyType = new graphql.GraphQLObjectType({
  name: "Hobby",
  description: "Hobby description",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLInt },
    user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(usersData, { id: parent.userId })
      }
    }
  })
})

const PostType = new graphql.GraphQLObjectType({
  name: "Post",
  description: "Post description",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    title: { type: graphql.GraphQLString },
    comment: { type: graphql.GraphQLInt },
    user: {
      type: UserType,
      // In this case, parent is PostType
      resolve(parent, args) {
        // within user, get the user with an id that is equal to parent.userId
        return _.find(usersData, { id: parent.userId })
      }
    }
  })
})

// RootQuery
// RootQuery is the "path" that allows to query the graph to reach nodes 
const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQueryType", // for documentation purposes
  description: "",
  fields: { // this is going to be the query structure
    user: {
      type: UserType,
      args: { id: { type: graphql.GraphQLString } }, // we may want to pass some args e.g. id to retrieve a specific user
      resolve(parent, args) { // resolve with data. In this case, parents refer to UserType and args to the args obj
        // get & return data from a data source
        return _.find(usersData, { id: args.id })
      }
    },
    hobby: {
      type: HobbyType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return _.find(hobbiesData, { id: args.id })
      }
    },
    post: {
      type: PostType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return _.find(postData, { id: args.id })

      }
    }
  }
})

// export schema's query
module.exports = new graphql.GraphQLSchema({
  query: RootQuery
})