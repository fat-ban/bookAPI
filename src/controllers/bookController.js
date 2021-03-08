//const express = require("express")

const Book = require("../models/book")
//afficher tout les livre
const getBooks = async (req, res) => {
  try {
    const result = await Book.find();
    if (!result) return res.status(400).json({ err: "ERROR" })
    return res.status(200).json(result);
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" })
  }
}
//get user relation with book
//const getBookUser = async(req,res)=>{
  //const foundBookUser = await Book.find({title : params.title}).populate("librarian")
  //res.json(foundBookUser)
//}
//ajouter des livres a la bd
const addBook = async (req, res) => {
  console.log('Post book :', req.body)
  const book = new Book(req.body)
  console.log(book)

  try {
     console.log(req.body)
      await book.save(function(err,data){
        console.log(err)
        console.log(data)
    })
    res.status(201).send({ book})
  } catch (error) {
    console.log("error:", error)
  }

}
//MAJ Livre by id
const updateBook = async (req, res) => {
try {
  const bookFound = await Book.findOne({_id: req.params.id})
        console.log("bookFound: ",bookFound )
        if(!bookFound){
            res.status(404).json({
                message: "Object with these information doesn't exist",
                data: {}
            })
        }
        await Book.findOneAndUpdate({_id: req.params.id}, req.body)
        res.status(200).json({
            message: "Updatedsuccessfully",
            data: {}
        })
} catch (error) {
  res.status(500).send()
}
}
//supp un livre by id
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ err: "ERROR" });
    const result = await Book.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR" });
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
}
module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook
  //getBookUser
}