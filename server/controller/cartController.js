module.exports = {
    getProductsToCart: async (req, res) => {
        const db = req.app.get('db')
        let cart = await db.get_cart() 
        // const reducer = (acc,cur)=> acc.price+cur.price
        const total = cart.reduce((acc, cur) => {
            return acc += (cur.price * cur.quantity)
        }, 0)
            
        // let total = cart.reduce(reducer)
        
        cart = {cart,total}
        res.status(200).send(cart)
        },
        
        
    addProductsToCart: async (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        const quantity = 1
        const cart = await db.add_cart(product_id, quantity)    
        res.status(200).send(cart) 
    },
    
    updateProductsInCart: async (req, res) => {
        const db = req.app.get('db')
        const {quantity } = req.body
        const {product_id} = req.params
        let cart = await db.update_cart(product_id, +quantity)
        const total = cart.reduce((acc, cur) => {
            return acc += (cur.price * cur.quantity)
        }, 0)
        cart = {cart,total}
            
        console.log(cart)
        res.status(200).send(cart)    
    },
        
    
        
    deleteProductsFromCart: async (req, res) => {
    const db = req.app.get('db')
    const {id} =req.params 
    const cart = await db.delete_cart(id)
    res.status(200).send(cart)
   }

}