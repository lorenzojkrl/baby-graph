const express = require('express');
// require('express-graphql') returns an object 
// with a property called graphqlHTTP that is the function I want to call
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema')
const types_schema = require('./schema/types_schema')


const app = express();

app.use('/mygraphql', graphqlHTTP({
  graphiql: true, // show graphiql
  schema
}))

app.use('/mygraphql-types', graphqlHTTP({
  graphiql: true, // show graphiql
  schema: types_schema
}))

// run with: nodemon app to see the app at localhost:4000/mygraphql
app.listen(4000, () => {
  console.log('listening for requests');
})



// npm init
// npm install express --save
// npm install graphql express-graphql
// sudo npm install nodemon -g
// npm install lodash --save