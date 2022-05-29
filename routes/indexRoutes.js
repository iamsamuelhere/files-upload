const router=require("express").Router();
const cloudinary=require("../configs/cloudinaryConfig");
const upload=require("../configs/multerConfig");


router.post("/upload-file",upload.single("file"),async(req,res)=>{
    
        try{
            const result = await cloudinary.uploader.upload(req.file.path,{resource_type: "auto"});
            console.log(result);
            return res.status(201).json({
                "url":result.secure_url
            })
        }catch(e){
           console.log(e);
           res.send("no:(")

        } 
    })


module.exports=router;