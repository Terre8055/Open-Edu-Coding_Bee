const dbModel = require('../models/userModels')
const connectDb = require('../dbConnect/dbConnect')

// const bodyParser = require('body-parser')

//@desc Register User
//@route POST /api/users/register
//access public

const registerUser = async(req, res) => {
    const {name, password, email} = req.body
    //check input to find null values
    if(!name || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    //check to see if user already exist
    // const userAvailable = await User.findOne({email});
    // if (userAvailable){
    //     res.status(400);
    //     throw new Error("User already registered")
    // }

   
    
    res.json('Account created successfully')
}

//@desc Login User
//@route POST /api/users/register
//access public

const loginUser = (req, res) => {
    res.json('hi')
}

module.exports = {registerUser, loginUser}