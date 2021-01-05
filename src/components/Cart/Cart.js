import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
           cart: []
           
        }
       
    }
    
  
    updateToCart = () => {
        axios.put(`/cart`).then((res) => {
                this.setState({
                    cart:res.data
                })
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
                cart:res.data
            })
        })
    }


    render() {
        console.log(this.state)
        const mappedCart = this.state.cart.map ((products,index) => {
            return(
                <div className='container' key={index}>
                    
                    <img className='images' src={products.img}/>
                    <span className='description'>{products.descript}</span>
                    <br/>
                    <span className='price'>${products.price}.99</span>
                    <button className='deletebtn' onClick={()=>this.deleteItemFromCart(products.id)}>Delete</button>
                    <label>
                        Qty:
                    <select >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </label>
                    <button onClick={()=>this.updateToCart()}>Submit</button>

                        




             
                   
                  

                 
                   
                </div>
            )   
        })

        
        return (
            <div>
               {mappedCart}
              
               <button><Link to='/checkout'>Go To CheckOut</Link></button>
            </div>
        )
    }
}


export default Cart
