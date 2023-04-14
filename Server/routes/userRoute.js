const express = require('express')
const { loginUser, registerUser } = require('../controllers/userController')
const router = express.Router()


router.post('/login', loginUser)
router.post('/register', registerUser)

//Testing redirects and pug render
// please ignore below
router.get('/user/info', (req,res) => res.json({message:'hi'}))

router.get('/users/details', (req, res) => {
    console.log(req.ip)
    res.render('error', { message: 'Redirecting you to appropriate site' })
    // res.redirect('/auth/register')

    
})

module.exports = router