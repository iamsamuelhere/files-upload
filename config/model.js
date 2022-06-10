const mongoose=require("mongoose");
let locationSchema= mongoose.Schema({
  "address":String,
  "postalCode":String,
  "city":String,
  "countryCode":String,
  "region":String,
  
  })
  
  let profilesSchema= mongoose.Schema({
  "network": String,
  "username": String,
  "url": String
  })

  let rateSkill=mongoose.Schema({
    "name":String,
    "level":Number
  })
  let skillsSchema=mongoose.Schema({
    "languages":[rateSkill],
    "frameworks":[rateSkill],
    "technologies":[rateSkill],
    "libraries": [rateSkill],
     "databases":[rateSkill],
     "practices": [rateSkill],
    "tools":[rateSkill]
    })
    

  
  
  let workSchema= mongoose.Schema({
  "name":String,
  "position":String,
  "url": String,
  "startDate": String,
  "endDate": String,
  "years": String,
  "highlights": Array,
  "summary": String
  })
  
  let institutionSchema= mongoose.Schema({
  "institution": String,
        "url": String,
        "studyType": String,
        "area": String,
        "startDate": String,
      "endDate": String,
        "score": String,
        "courses": Array
  })
  
  let activitiesSchema= mongoose.Schema({
  "involvements": String,
  "achievements": String
  })

  let basicSchema= mongoose.Schema(
    {
     "name":String,
     "label":String,
   "image":String,
   "email":String,
   "phone":String,
   "url":String,
   "summary":String,
    "location":locationSchema,
    "relExp": String,
    "totalExp": String,
    "objective": String,
    "profiles":[profilesSchema],
    }
    )

    let profileSchema = mongoose.Schema({
      "basics":basicSchema,
      "skills":skillsSchema,
      "work":[workSchema],
      "education":[institutionSchema],
      "activities":[activitiesSchema],
      "volunteer": Array,
      "awards": Array,
      "emailref":String
     })
  
  


const Profile=mongoose.model('Profile',profileSchema);
module.exports=Profile;