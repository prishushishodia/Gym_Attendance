const mongoose = require('mongoose')
mongoose.connect(MONGO_DB_URL)

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
        maxlength:20,
    },
    password: {
        type:String,
        required:true,
        minlength:3
    },
    Username: {
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20
    }
})


const attendanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    attendance: {
        type:Array,
    }
})


