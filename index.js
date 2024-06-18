const express = require("express")
const mongoose = require("mongoose")
const user = require("./Routes/userRoute")

mongoose.connect("mongodb://localhost:27017/Sampleproject")

const PORT = 8000
const app = express()


app.use(express.json())

app.use(user)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
