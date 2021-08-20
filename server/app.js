const express = require('express');

const app = express();

// run with node app 
app.listen(4000, () => {
  console.log('listening for requests');
})