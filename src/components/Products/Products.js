import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Products.css'
import './reset.css'


export class Products extends Component {
   state = {products:[]}

    async componentDidMount(){
        const{type,animal} = this.props.match.params
        await axios.get(`/products/${type}/${animal}`).then((res) => {
                this.setState({
                      products:res.data
                    })
                })
            }

    async componentDidUpdate(prevProps) {
        const{type,animal} = this.props.match.params
        if (this.props.match.params !== prevProps.match.params) {
          await axios.get(`/products/${type}/${animal}`)
            .then(res => this.setState({products: res.data}))
        }
      }
            
            addToCart = (id) => {
                axios.post(`/cart/${id}`).then((res) => {
                    this.setState({
                        cart:res.data
                    })
                })
            }
            
            
            
            render() {
        console.log(this.props)
      
        const mappedProducts = this.state.products.map ((products) => {
            return(
                <div className='product-container' key={products.id}>
               
                   
                    <img className='product-images' src={products.img}/>
                    <div className='product-description'>{products.descript}</div>
                    {/* <br/> */}
                    <div className='product-price'>${products.price}</div>
                    {/* <br/> */}
                    <button className='product-addbtn'onClick={()=>this.addToCart(products.id)}>Add To Cart</button>

                 
                
                </div>
            )   
        })

       
      
        return (
            <div className="products-container">
                <div className="map">
               {mappedProducts} 
                </div>
                    
               <button className='product-cart'><Link to='/cart'>Go To Cart</Link></button>
               
            </div>
        )
    }
}

export default Products;
