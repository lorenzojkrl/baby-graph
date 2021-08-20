const express = require('express');
// require('express-graphql') returns an object 
// with a property called graphqlHTTP that is the function I want to call
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema')

const app = express();

app.use('/mygraphql', graphqlHTTP({
  graphiql: true, // when we serve mygraphql, graphiql should be shown
  schema
}))

// run with nodemon app to see the app at localhost:4000
app.listen(4000, () => {
  console.log('listening for requests');
})



// npm init
// npm install express --save
// npm install graphql express-graphql
// sudo npm install nodemon -g