const mongoose = require('mongoose');

//describes the structure and data types of the fields for documents.
const bookSchema = new mongoose.Schema({
    bookname:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
});

// Create the model from the schema
const bookModel = mongoose.model('Book', bookSchema);

// Export the model to use it in other files
module.exports = bookModel;