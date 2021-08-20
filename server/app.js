const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/mygraphql', graphqlHTTP({
  graphiql: true // when we serve mygraphql, graphiql should be shown
}))

// run with node app to see the app at localhost:4000
app.listen(4000, () => {
  console.log('listening for requests');
})


  ```
npm init
npm install express --save
npm install graphql express-graphql
npm install nodemon
```