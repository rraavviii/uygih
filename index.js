const express=require('express')
const app=express();
const port=3000;


app.get('/',(req,res)=>{
    res.send('hey..')
})

app.listen(port,(err)=>{
    console.log('server running...')
})