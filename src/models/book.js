const mongoose = require("mongoose");


const users = require('./user')
//const Schema = mongoose.Schema;
const BookSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: "Book Title is required",
  },
  description: {
    type: "string",
    required: "Book Description is required",
  },
  author: {
    type: "string",
    required: "Book Author is required",
  },
  rating: {
    type: "number",
    default: 0,
  },
  nbVoters: {
    type: "number",
    default: 1,
  },
  img: {
    type: "string",
    default: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
  },
  user : {type: mongoose.Schema.Types.ObjectId, ref: "users"}
});
const Book = mongoose.model("book", BookSchema);

module.exports = Book;