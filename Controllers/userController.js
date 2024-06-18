const User = require("../Models/Users")
//get
const user = async(req, res) => {
    const user = await User.find()

    if(!user){
        res.send("No User")
    }
    res.send(user)
    
    
}

// const user = (req, res) => {
//     res.send("Hello From User")

// }


//post
const createUser = async(req, res) => {
    const user1 = new User(req.body)
    await user1.save()
    res.send(user1)
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
const updateUser = async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)

if (!user) {
    return res.send("No User Available, No Updation Possible")
}

res.json({ message: "User Updated",  user })
}

//delete 
const deleteUser = async(req, res) => {

   const user = await User.findByIdAndDelete(req.params.id)

if (!user) {
    return res.send("No User Available, No Deletion Possible")
}

res.json({ message: "User Deleted" })
}

// const deleteUser = async(req,res) => {
//     const user = await User.findByIdAndDelete(req.params.id)
//     if(!user){
//         res.send("No user present,delete not available")
//     }
//     res.send(user).json("The delete has been successful!!!")
// }

module.exports = {user, createUser, updateUser, deleteUser}