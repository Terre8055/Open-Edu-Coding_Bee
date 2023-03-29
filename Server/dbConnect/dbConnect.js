const {MongoClient} = require('mongodb')
const dotenv = require('dotenv').config()

const uri = process.env.CONNECTION_STRING
const client = new MongoClient(uri)

const dbname = 'userCredentials'
const collection_name = 'account'

const accountsCollection = client.db(dbname).collection(collection_name)

const connectToDatabase = async() => {
    try{
        await client.connect();
        console.log(`Connected to the ${dbname} database`)
    }catch(err){
        console.error('Error while connecting to the database')
    }
}

const main = async() => {
    try{
        await connectToDatabase();
    }catch(err){
        console.error('Error connecting to database')
    }finally{
        await client.close()
    }
}

module.exports = main


