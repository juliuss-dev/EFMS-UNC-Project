const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongo Database is successfully connected')
    } catch (error) {
        console.log(error)
    }
}
//access this in server.js
module.exports = connectDB;