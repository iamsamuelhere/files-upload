require('dotenv').config()
const cors=require("cors");
const express=require("express");
const app =express();
app.use(cors());
app.use(express.json());
const db=require("./config/config");
const { findOneAndUpdate } = require("./config/model");
const Profile=require("./config/model");
const port= process.env.PORT||3000;


app.get("/profile/:email",async(req,res)=>{
   const email=req.params.email;
   console.log(`email ${email}`)
   try{
       let user= await Profile.findOne({emailref:email});
       console.log(user);
       if(user){
           return res.json({"msg":user});
       }
       return res.status(404).json({"msg":"not exist"})
   }
   catch(e){
     console.log(e);
   }
})

app.post("/add-data",async(req,res)=>{
     req.body.emailref=req.body.basics.email;
     console.log(req.body.emailref);

         let oldUser= await Profile.findOne({emailref:req.body.emailref});
      if(oldUser){
          let update=await Profile.findOneAndUpdate({emailref:req.body.email},req.body);
          console.log("update",update);
          return res.send("upadated");
           
      }
     let addData=new Profile(req.body);
     try{
         await addData.save();
         return res.json({
             "msg":"added"
         })
     }
     catch(e){
         console.log(e)
         return res.json({
             "msg":"Error adding"
         })
     }

})


app.listen(port,(err)=>{
  if(err){
      console.log(err);
  }
  else{
      console.log(`Started at ${port}`)
  }
})