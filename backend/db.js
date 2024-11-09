const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin:1NHGS8SRzWsZBtDO@blogging.fo1wymr.mongodb.net/")

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
    username: {
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
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum: ["Present", "Absent"],
        default:'Absent'
    }
})

const User = mongoose.model('User', userSchema)
const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = {
    User,
    Attendance
};
