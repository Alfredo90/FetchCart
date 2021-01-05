import axios from 'axios'
import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
           cart: []
        }
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
        const mappedCart = this.state.cart.map ((cart,index) => {
            return(
                <div className='container' key={index}>
               <span>{cart}</span>    
               <input></input>
                   
                  

                 
                   
                </div>
            )   
        })

        
        return (
            <div>
               {mappedCart} 
               cart
            </div>
        )
    }
}


export default Cart
