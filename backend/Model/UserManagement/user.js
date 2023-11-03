const mongoose=require('mongoose');

const userScheme=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

module.exports=mongoose.model('users',userScheme)