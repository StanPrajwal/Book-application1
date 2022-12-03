const router = require("express").Router()
const bcrypt = require('bcrypt')
const User = require("../models/userSchema")

router.post("/register",async (req,res)=>{
    try {
       
        const {userName,password} = req.body.register
        // const {userName,password} = req.body
        const user = await User.findOne({userName})
       console.log(user)
        if(!user){
            console.log(req.body)
            bcrypt.hash(password,6,async function(err,hash){
                if(hash){
                    const newUser = await User.create({
                        userName,
                        password:hash
                    })
                    return res.json({
                        newUser,
                        status:"success",
                        message:"Registered Successfully"
                    })
                }
            })
            
        }else{
          return  res.status(404).json({
                error:"User already exist"
            })
        }
        
       

    } catch (error) {
        res.status(400).json({
            error:"invalid creadintial"
        })
    }
})

router.post("/login",async (req,res)=>{
    try {
        // console.log(req.body)
        // const {login} = req.body
        const {userName,password} = req.body.login
        const user = await User.findOne({userName})
        const result = await bcrypt.compare(password,user.password)

       
        if(result){
            console.log(user)
           return res.json({
                userid:user._id,
                status:"success",
                message:"login Successfully"
            })
        }else{
          return  res.status(404).json({
                error:"User not found"
            })
        }
        
       

    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})

module.exports = router