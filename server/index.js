require('dotenv').config()
const express = require('express')
const massive = require('massive')

const productCtrl = require('./controller/productController')
const cartCtrl = require('./controller/cartController')

const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static(`${__dirname}/../build`))


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

app.get('*', (_,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })
app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))



