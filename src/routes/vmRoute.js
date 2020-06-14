'use strict';

const express = require('express');
const router = express.Router();
const {VM , NodeVM} =  require('vm2');
const fetch = require('node-fetch');
const codeScript = require('../services/weather.js');


router.get("/", (req , res) => {
    res.send("We Are A live ??!!")
})



router.get("/code",  async(req , res) => {

    let vm = new NodeVM({
        require:{
            external:true
        }
    });
    let code = codeScript;

    try{
        console.log('Hola amegooooo')
        let result = await vm.run(code , 'vmRoute.js');
        console.log("route" ,result);
        res.send(result);

    }catch(err){
        res.status(500);
        res.statusMessage="vm script error!";
        res.json({error : `${err}`})  ;
    }
    
})




module.exports = router;