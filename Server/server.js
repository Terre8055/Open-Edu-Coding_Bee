const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/userRoute')
const errorHandler = require('./middlewares/errorHandler')
const main = require('./dbConnect/dbConnect')
const dotenv = require('dotenv').config()

//connect db
main()


const port = process.env.PORT || 3000

//middlewares
app.use(bodyParser.json())
app.use('/auth', router)
app.use(errorHandler)


app.listen(port, () => console.log('Connected to server on port'))