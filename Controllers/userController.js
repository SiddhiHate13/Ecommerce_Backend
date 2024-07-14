const User = require('../Models/Users');
const mongoose = require ("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userRegistration = async(req, res) => {
    const { name, email, password } = req.body;
    

    if(!name && !email && !password) {
        res.send("All fields are required.");
    }

    try{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            return res.status(400).send("Invalid email format.");
        
    }
    
    const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("Email already exists.");
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10); // Generate salt
        const hashedPassword = await bcrypt.hash(password, salt); // Hash password with the salt

        // Create a new user instance with hashed password
        const newUser = new User({
            name,
            email,
            password: hashedPassword // Store hashed password
        });

        // Save the user to the database
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '5d' }   
         );
        res.status(201).json({ message: "User registered successfully.", newUser, token });

        
    }catch(error){
        console.error("Error in user registration:", error);
        res.status(500).send("Failed to register user. Please try again later.");
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Failed to fetch users. Please try again later.");
    }
};

module.exports = { userRegistration, getUsers };







//     else {
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         const emailtest = email;
//         if (!emailPattern.test(emailtest)) {
//             return res.status(400).send("Invalid email format.");
//         } else {
//             console.log("Valid Email Address")
//             res.send("Valid")
//         }

       
//             const user =  new User()
//             await user.save()
//             res.send(user)
      
//     }
// }
//  module.exports = userRegistration;

























// // Get all users
// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     if (users.length === 0) {
//       return res.status(404).send("No Users Found");
//     }
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// // Create a new user
// const createUser = async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// // Update a user
// const updateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!user) {
//       return res.status(404).send("No User Available, No Updation Possible");
//     }
//     res.status(200).json({ message: "User Updated", user });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// // Delete a user
// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).send("No User Available, No Deletion Possible");
//     }
//     res.status(200).json({ message: "User Deleted" });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// module.exports = { getUsers, createUser, updateUser, deleteUser };
