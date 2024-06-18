const mongoose = require("mongoose")

const userScheme = new mongoose.Schema({
    _id: Number,
    name: String,
    email: String,
    password: String,
    age: Number,
    mobilenumber: Number,
    address: String
})

const User = mongoose.model("User", userScheme)

module.exports = User