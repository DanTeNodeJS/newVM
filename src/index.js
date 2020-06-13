'use strict'

//Dependencies
const app = require('express')();
const {VM , NodeVM} =  require('vm2');
const PORT = 3000 ;



app.get("/", (req , res) => {
    res.send("We Are A live !!")
})


app.get("/code", async (req , res , next) => {

    let context = 'let a = 0 ;';
    let code = 'a = a + 99';
    let vm = new NodeVM();

    try{
        let para = vm.run(context);
        console.log('run para')
        let result = vm.run(code);
        console.log('test');
        res.send(`${para}`);

    }catch(err){
        res.status(500);
        res.statusMessage="vm script error!";
        res.json({error : `${err}`})  ;
    }
    
})



app.listen(PORT , () => {
    console.log(`Running On Port: ${PORT}`);
})