const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },author:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },publish_date:{
        type:String,
        required:true
    },publisher:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,ref:"User"
    }
})

const Book = mongoose.model("Book",bookSchema)
module.exports = Book