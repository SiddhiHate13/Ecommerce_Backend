const Product = require("../Models/Products")
//get
const product = async(req, res) => {
    const product = await Product.find()

    if(!product){
        res.send("No Product")
    }
    res.send(product)
    
    
}

// const user = (req, res) => {
//     res.send("Hello From User")

// }


//post
const createProduct = async(req, res) => {
    const product1 = new Product(req.body)
    await product1.save()
    res.send(product1)
}


// const updateUser = async(req, res) => {
//     const params = req.params.id

//     const user = await User.findByIdAndUpdate(req.params.id, req.body)

//     if(!user){
//         res.send("No User Available, No Updation Possible")
//     }
//     res.send(user).json("User Updated.")
// }

//put
const updateProduct = async(req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)

if (!product) {
    return res.send("No Product Available, No Updation Possible")
}

res.json({ message: "Product Updated",  product })
}

//delete 
const deleteProduct = async(req, res) => {

   const product = await Product.findByIdAndDelete(req.params.id)

if (!product) {
    return res.send("No Product Available, No Deletion Possible")
}

res.json({ message: "Product Deleted" })
}

// const deleteUser = async(req,res) => {
//     const user = await User.findByIdAndDelete(req.params.id)
//     if(!user){
//         res.send("No user present,delete not available")
//     }
//     res.send(user).json("The delete has been successful!!!")
// }

module.exports = {product, createProduct, updateProduct, deleteProduct}