import React, { Component } from 'react'
import axios from 'axios'

export class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
           products: [],
          
        }
    }

    componentDidMount(){
        const{type,animal} = this.props.match.params
        axios.get(`/products/${type}/${animal}`).then((res) => {
            this.setState({
              products:res.data
            })
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                
            </div>
        )
    }
}

export default Products;
