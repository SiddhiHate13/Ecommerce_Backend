const Order = require("../Models/Orders")
//get
const order = async(req, res) => {
    const order = await Order.find()

    if(!order){
        res.send("No Order")
    }
    res.send(order)
    
    
}



//post
const createOrder = async(req, res) => {
    const order1 = new Order(req.body)
    await order1.save()
    res.send(order1)
}




//put
const updateOrder = async(req, res) => {
    await Order.findByIdAndUpdate(req.params.id, req.body)

if (!order) {
    return res.send("No Order Available, No Updation Possible")
}

res.json({ message: "Order Updated",  order })
}

//delete 
const deleteOrder = async(req, res) => {

   const order = await Order.findByIdAndDelete(req.params.id)

if (!order) {
    return res.send("No Order Available, No Deletion Possible")
}

res.json({ message: "Order Deleted" })
}



module.exports = {order, createOrder, updateOrder, deleteOrder}