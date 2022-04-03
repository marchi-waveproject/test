const express = require("express");

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({message: 'works'});
})

app.listen(5000,()=> {
    console.log('app listinig on port 5000')
})