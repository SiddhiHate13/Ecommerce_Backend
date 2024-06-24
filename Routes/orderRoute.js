const express = require("express")

const Order = require("../Models/Orders")

const {order , createOrder, updateOrder, deleteOrder} = require("../Controllers/orderController")


const router = express.Router()

router.get("/order", order)

router.post("/createOrder", createOrder)

router.put("/updateOrder/:order_id", updateOrder)

router.delete("/deleteOrder/:id",deleteOrder)

module.exports = router