const mongoose = require("mongoose");
const { Schema } = mongoose;

taskSchema  = new Schema({
    title: {type:String, required:true, unique:true},
    status: {type:Boolean, required:true},
    Date: {type: Date,default: Date.now, required:true}  
  });
  
  exports.Task  = mongoose.models.Task 
    ? mongoose.model('Task')
    : mongoose.model('Task', taskSchema);
    console.log(mongoose.models.Task);