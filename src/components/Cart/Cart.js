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
        return (
            <div>
             <h1>CART</h1>
            </div>
        )
    }
}

export default Cart
