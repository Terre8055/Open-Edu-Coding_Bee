const bcrypt = require('bcrypt')
const User = require('../models/userModels')
const asyncHandler = require('express-async-handler')

// const bodyParser = require('body-parser')

//@desc Register User
//@route POST /api/users/register
//access public

const registerUser = asyncHandler(async(req, res) => {
    const {firstname, lastname, password, email, phone} = req.body
    //check input to find null values
    if(!firstname || !lastname || !email || !password ||!phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    //check to see if user already exist

    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(`Hash: ${hashedPassword}`)

    //create user
    const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phone
    })
    console.log(`User created ${user}`)

    //user created successfully?
    if(user){
        res.status(201).json('Success')
    }else{
        res.status(400)
        throw new Error("User data is not valid")
    }
    res.json({message: 'Register the user'})
}
)
//@desc Login User
//@route POST /api/users/register
//access public

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    //check to find empty fields
    if(!email || !password){
        res.status(400); //validation_error
        throw new Error("All fields are mandatory")
    }

    //check if user exists in database
    const user = await User.findOne({email})

    //if credential matches 

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json('Success')
    }else{
        res.status(401)
        throw new Error("Failed to validate credentials")

    }
})

module.exports = {registerUser, loginUser}