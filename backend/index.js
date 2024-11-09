const express = require('express')
const app = express()
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const { User } = require('./db')


app.use(cors())
app.use(express.json())

app.post('/api/v1/signup', async(req, res) => {
    const {username , email, password} = req.body;

    try{if(!username || !email || !password){
        res.status(400).json({
            message:"Please provide all fields"
        })
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
        res.status(400).json({
            message:"Email already exists"
        })
    }

    const newUser = new User({
        username: username,
        email: email,
        password: password
    })
    await newUser.save();

    res.status(201).json({
        message:"User created successfully"
    })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
})

app.get('/api/v1/users', async(req, res) => {
    try{
        const users = await User.find().select("-password")
        if(users.length === 0){
            res.status(200).json({
                message:"No users currently"
            })
        }
        res.status(200).json(users)
    }catch{
        res.status(500).json({
            message:"error in fetching users"
        })
    }
})




app.listen(3000)
console.log("Listening on http://localhost:3000")