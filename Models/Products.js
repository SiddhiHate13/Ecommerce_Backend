const mongoose = require("mongoose")

const productScheme = new mongoose.Schema({
    _id : Number,
    pname : String,
    price : Number,
    category : String,
    description : String,
    quantity : Number,
    warranty : Number
})

const Product = mongoose.model("Product", productScheme)

module.exports = Product







