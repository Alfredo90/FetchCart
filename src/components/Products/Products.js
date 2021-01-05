import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Products.css'
import './reset.css'


export class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
           products: []
          
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

    addToCart = (id) => {
    axios.post(`/cart/${id}`).then((res) => {
            this.setState({
                cart:res.data
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
                    <button className='addbtn'onClick={()=>this.addToCart(products.id)}>Add To Cart</button>

                 
                   
                </div>
            )   
        })

       
      
        return (
            <div>
               {mappedProducts} 
               <button><Link to='/cart'>Go To Cart</Link></button>
            </div>
        )
    }
}

export default Products;
