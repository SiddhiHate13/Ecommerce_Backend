const mongoose = require("mongoose")

const orderScheme = new mongoose.Schema({
    order_id : Number,
    customer_name : String,
    order_date : Date,
    product_id : Number,
    quantity : Number,
    total_amount : Number,
    order_status : String,
    delivery_date : Date
})

const Order = mongoose.model("Order", orderScheme)

module.exports = Order