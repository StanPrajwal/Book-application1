const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRouter = require("./router/user")
const bookRouter = require("./router/Book")
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/api/user",userRouter)
app.use("/api/book",bookRouter)

mongoose.connect('mongodb://localhost/bookApp').then(()=>console.log("database connected")).catch((err)=>console.log(err))

app.listen(4000,()=>console.log("server connected"))
