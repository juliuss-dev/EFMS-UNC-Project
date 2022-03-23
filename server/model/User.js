const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    middlename:{
        type: String,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    birthdate:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    role:{
         type: Number,
         default: 0
    }

},{timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User;