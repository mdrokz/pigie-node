var mongoose=require('mongoose');
var Umongoose=require('mongoose-unique-validator');
var Schema=mongoose.Schema;




var userSchema=new Schema({Email:{type:String},Password:{type:String}});

userSchema.plugin(Umongoose);
module.exports=mongoose.model('users',userSchema);
