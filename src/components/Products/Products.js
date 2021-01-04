import React, { Component } from 'react'
import axios from 'axios'
import './Products.css'
import './reset.css'


export class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
           products: [],
          
        }
    }

    async componentDidMount(){
        const{type,animal} = this.props.match.params
        await axios.get(`/products/${type}/${animal}`).then((res) => {
            this.setState({
              products:res.data
            })
        })
    }

  
    render() {
        console.log(this.state)
        const mappedProducts = this.state.products.map ((products) => {
            return(
                <div className='container' key={products.id}>
                   
                    <img className='images' src={products.img}/>
                    <span className='description'>{products.descript}</span>
                    <br/>
                    <span className='price'>${products.price}.99</span>
                    <br/>
                    <button className='addbtn'>Add To Cart</button>

                 
                   
                </div>
            )   
        })

       
      
        return (
            <div>
               {mappedProducts} 
            </div>
        )
    }
}

export default Products;
