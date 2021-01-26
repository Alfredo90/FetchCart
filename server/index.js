require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const checkoutCtrl = require('./controller/checkoutController')
const productCtrl = require('./controller/productController')
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

//Product Endpoints
app.get('/products/:type/:animal',productCtrl.displayProducts)

//Cart ENDPOINTS
app.get('/cart', cartCtrl.getProductsToCart)
app.post('/cart/:product_id', cartCtrl.addProductsToCart)
app.put('/cart/:product_id', cartCtrl.updateProductsInCart)
app.delete('/cart/:id', cartCtrl.deleteProductsFromCart)
//CHECKOUT ENPOINTS
// app.put('/checkout', checkoutCtrl.checkoutCart)


app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))



