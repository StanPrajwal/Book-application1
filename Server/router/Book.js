const router = require('express').Router()
const { findByIdAndDelete, findByIdAndUpdate } = require('../models/bookSchema');
const Book = require("../models/bookSchema")

router.post("/addbook",async (req,res)=>{
    try {
        const {book} = req.body;
      
        const addBook = await Book.create(book)
        res.json(addBook)
    } catch (error) {
      res.status(400).json({
        error:error.message
      })
    }
})

router.get("/fetch",async(req,res)=>{
  try {
    const books = await Book.find()
    res.json({
      books
    })
  } catch (error) {
    res.status(400).json({
      error:error.message
    })
  }
})
router.put("/update/:id",async(req,res)=>{
  console.log(req.params.id)
  try {
    console.log(req.body.book)
    const book = await findByIdAndUpdate({_id:req.params.id},req.body.book)
    res.json({
      book,
      status:"success",
      message:"book removed"
    })
  } catch (error) {
    res.status(400).json({
      error:error.message
    })
  }
})
router.delete("/remove/:id",async(req,res)=>{
  console.log(req.params.id)
  try {
    const book = await findByIdAndDelete({_id:req.params.id})
    res.json({
      status:"success",
      message:"book removed"
    })
  } catch (error) {
    res.status(400).json({
      error:error.message
    })
  }
})

module.exports = router