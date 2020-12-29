module.exports = {
    getCart:(req,res) => {
        res.status(200).send(cart)
    },
    addToCart:(req,res) => {},
    changeQuantity:(req,res) => {},
    removeFromCart:(req,res) => {},
  
}