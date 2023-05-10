const mongoose = require('mongoose'); 
    
const fileSchema = mongoose.Schema({
     name:{
         type: String,
         required: true,
     },
    path: {
        type: String,
        
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
 
 //Export the model
const File = mongoose.model('File', fileSchema);
 
module.exports = File