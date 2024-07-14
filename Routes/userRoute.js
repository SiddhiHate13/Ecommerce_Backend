const express = require('express');
const User = require("../Models/Users")

// const { getUsers, createUser, updateUser, deleteUser } = require('../Controllers/userController');

const router = express.Router();

const { userRegistration, getUsers } = require("../Controllers/userController")


router.get('/users', getUsers);
router.post('/users', userRegistration);


// router.get('/users', getUsers);

// router.put('/updateuser/:id', updateUser);
// router.delete('/deleteuser/:id', deleteUser);

module.exports = router;
