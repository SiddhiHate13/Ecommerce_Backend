const express = require("express")
const mongoose = require("mongoose")
const user = require("./Routes/userRoute")
const product = require("./Routes/productRoute")
const order = require("./Routes/orderRoute")
require('dotenv').config();
const connectDB = require ("./config/db")


connectDB();

const app = express()

const PORT = process.env.PORT;


app.use(express.json())

app.use('/api', user)
app.use(product)
app.use(order)


app.get("/", (req, res) => {
  res.send("Hello from the Server");
})


  


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});