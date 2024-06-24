const express = require("express")

const Product = require("../Models/Products")

const {product , createProduct, updateProduct, deleteProduct} = require("../Controllers/productController")


const router = express.Router()

router.get("/product", product)

router.post("/createProduct", createProduct)

router.put("/updateProduct/:id", updateProduct)

router.delete("/deleteProduct/:id",deleteProduct)

module.exports = router