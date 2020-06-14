'use strict'

//Dependencies
const app = require('express')();
const { inherits } = require('util');
const PORT = 3000 ;
const vmRoute = require('../routes/vmRoute.js');

 
app.use(vmRoute);


module.exports = {
    server : app ,
    start : (port) => {
      let PORT = port || process.env.PORT || 3000;
      app.listen( PORT, () => {
        console.log(`===================>>>>>>> Live at Port: ${PORT}!!! <<<<<<<===================`);
      });
    },
  };
  