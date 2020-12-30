// import axios from 'axios'
import React, { Component } from 'react'

export class Cart extends Component {
    constructor() {
        super()
        this.state = {
           products: [],
           cart: []
        }
    }

    // componentDidMount(){
    //     axios.get('/cart').then((res) => {
    //         this.setState({
    //             products:res.data
    //         })
    //     })
    // }
    render() {
        return (
            <div>
             
            </div>
        )
    }
}

export default Cart
