require('dotenv').config()
const express=require("express");
const app=express();
app.use(express.json())
app.use(express.static('public'))
const PORT= process.env.PORT||3000;
const indexRoute =require("./routes/indexRoutes");


app.use("/api/",indexRoute);

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server started at ${PORT}`)
    }
})