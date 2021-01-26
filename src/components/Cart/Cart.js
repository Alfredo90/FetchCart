import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'
import './reset.css'

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
           cart: [],
           total:0,
           loading: true
           
        }
       
    }


  
            
  
    updateToCart = (e,id) => {
        let quantity = e.target.value
        axios.put(`/cart/${id}`,{quantity}).then((res) => {
            this.setState({
                cart: res.data.cart, total: res.data.total})
        })
         
        }
        


    addToCart = (id) => {
        axios.post(`/cart/${id}`).then((res) => {
                this.setState({
                    cart:res.data
                })
            })
        }


    deleteItemFromCart = (id) => {
        axios.delete(`/cart/${id}`).then((res) => {
                this.setState({
                    cart:res.data
                })
            })
        }
        
    

    async componentDidMount(){
        await axios.get('/cart').then((res) => {
            this.setState({
                cart: res.data.cart, total: res.data.total, loading: false})
        })
    }
    

    render() {
      
    
        console.log(this.state.cart)
        console.log(this.state.total)
        const mappedCart = this.state.cart.map ((products,index) => {
        const total = products.price * products.quantity
            
            console.log(total)
            return(
                <div className='container' key={index}>
                    {console.log (products)}
                    <img className='images' src={products.img}/>
                    <span className='description'>{products.descript}</span>
                    <br/>
                    <span className='price'>${products.price}.</span>
                    <br/>
                    <button className='deletebtn' onClick={()=>this.deleteItemFromCart(products.id)}>Delete</button>
                     <br/>
                    <label className='qty'>
                        Qty:
                    <select value={products.quantity} onChange={(e)=>this.updateToCart(e,products.product_id)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </label>
                    <div>Total:${total}</div>
                    {/* <button className='checkout'><Link to='/checkout'>Checkout</Link></button> */}
                   
                   
                </div>
            )   
        })
        
        
        return (
            <div>
                
               {mappedCart}
                {!this.state.loading ? <button className='checkout'><Link to='/checkout'>Checkout</Link></button>: null}
               
             
            </div>
           
        )
    }
}


export default Cart
 
        
        
        
        
        
        
        
        
        
        
        
