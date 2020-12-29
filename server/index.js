require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const productCtrl = require('./controller/productController')

const cartCtrl = require('./controller/cartController')
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

//FOODS ENDPOINTS
app.get('/petfoods/:animal' )
// TOYS ENDPOINTS
app.get('/pettoys')
//CART ENDPOINTS
app.get('/cart', cartCtrl.getCart)
app.post('/cart', cartCtrl.addToCart)
app.put('/cart', cartCtrl.changeQuantity)
app.delete('/cart', cartCtrl.removeFromCart)
//CHECKOUT ENPOINTS
app.put('/checkout')


app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))



