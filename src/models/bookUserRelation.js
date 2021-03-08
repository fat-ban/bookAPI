const mongoose = require("mongoose");
const validator =require("validator")

//const Schema = mongoose.Schema;
const BookUserSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: "Book Title is required",
  },
  password: {
    type: String,
    // unique: true,
    minlength: 7,
    validate(value){
        if (value.toLowerCase().includes("password")) {
            throw new Error("password cannot contain password")
        }
    }
}
})

//cree un  modele pour la relation book et user
const RelationUserBook = mongoose.model("RelationUserBook", BookUserSchema)
//module.exports= RelationUserBook
