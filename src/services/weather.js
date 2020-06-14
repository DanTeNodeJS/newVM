'use strict';

module.exports=`
            const fetch = require('node-fetch');
            let data = async function getData(){
            let result = await fetch('http://api.weatherstack.com/current?access_key=3adcb561f473fd3b8e94958957a1e9e0&query=New%20York');
            return result.body;
            };
            module.exports= data();
            `