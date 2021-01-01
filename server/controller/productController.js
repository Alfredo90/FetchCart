module.exports = {
    displayProducts: async (req, res) => {
        const db = req.app.get('db')
        const {type, animal} = req.params
        const products = await db.get_products(type,animal) 
        res.status(200).send(products)
        },

    
   
}