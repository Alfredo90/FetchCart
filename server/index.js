require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const productCtrl = require('./controller/productController')
// const cartCtrl = require('./controller/cartController')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()


app.use(express.json())


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log("Hello World")
}).catch (err => console.log(err))

//ENDPOINTS
app.get('/petfoods')
app.get('/pettoys')
app.put('/cart')
app.put('/checkout')
app.delete('/cart')
app.post('/cart')


app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))



