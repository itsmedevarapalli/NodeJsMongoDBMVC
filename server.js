// const express  = require("express")

// const dotEnv = require('dotenv')

// const {MongoClient} =  require("mongodb")


// const app  = express()

// dotEnv.config()
// MongoClient.connect(process.env.MONGO_URI)
// .then(() => {
//     console.log("Mongo DB Connect SuccessFully")

// })
// .catch((error) => {
//     console.log("Error => ", error)

// })

// const port = 5010
// console.log(process.env)

// app.listen(port, () => {
//     console.log(`Server Started running at ${port}`)
//})


const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()
const PORT = process.env.PORT || 5012

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully")
})
.catch((error) => {
    console.log("Error => ", error)

})

app.use('/employees', employeeRoutes)

app.listen(PORT, () => {
    console.log(`Server Started and running at ${PORT}`)
})