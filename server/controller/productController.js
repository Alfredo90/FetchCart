module.exports = {
    getProducts: async (req, res) => {
    const db = req.app.get('db')
    const products = await db.get_products() 
    res.status(200).send(products)
    },

    deleteProductsFromCart: async (req, res) => {
    const db = req.app.get('db')
    const {id} =req.params 
    const products = await db.delete_products(id)
    res.status(200).send(products)
   },

   addProductsToCart: async (req, res) => {
   const db = req.app.get('db')
   const { product_id } = req.params
   const products = await db.add_products(product_id)    
   res.status(200).send(products) 
   },

   updateProductsInCart: async (req, res) => {
   const db = req.app.get('db')
   const { product_id, quantity } = req.body
   const products = await db.update_products(product_id, quantity)
   res.status(200).send(products)    
   }


}