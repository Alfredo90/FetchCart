module.exports = {
    getProductsToCart: async (req, res) => {
        const db = req.app.get('db')
        const cart = await db.get_cart() 
        res.status(200).send(cart)
        },
    addProductsToCart: async (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        const cart = await db.add_cart(product_id)    
        res.status(200).send(cart) 
    },
    
    updateProductsInCart: async (req, res) => {
        const db = req.app.get('db')
        const { product_id, quantity } = req.body
        const cart = await db.update_cart(product_id, quantity)
        res.status(200).send(cart)    
    },
    
    deleteProductsFromCart: async (req, res) => {
    const db = req.app.get('db')
    const {id} =req.params 
    const cart = await db.delete_cart(id)
    res.status(200).send(cart)
   }

}