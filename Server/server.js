const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/userRoute')
const errorHandler = require('./middlewares/errorHandler')
const connectDb = require('./dbConnect/dbConnect')
const dotenv = require('dotenv').config()
const cors = require('cors')

//connect db
connectDb()


const port = process.env.PORT || 3000

//middlewares
app.use(cors)
app.use(bodyParser.json())
app.use('/auth', router)
app.use(errorHandler)


app.listen(port, () => console.log('Connected to server on port'))