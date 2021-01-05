// import React, { Component } from 'react'

// export class CartItem extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           quantity: 1
//         }
//     }

//     handleChange = (event) => {
//         this.setState({quantity: event.target.value});
//       }

//     render() {
//         const {products, deleteItemFromCart,updateToCart} = this.props
//         return (
//         <div className='container' >
                    
//             <img className='images' src={products.img}/>
//             <span className='description'>{products.descript}</span>
//             <br/>
//             <span className='price'>${products.price}.99</span>
//             <button className='deletebtn' onClick={()=>deleteItemFromCart(products.id)}>Delete</button>
//             <label>
//                 Qty:
//             <select value={this.state.quantity} onChange={this.handleChange}>
//                 <option value='1'>1</option>
//                 <option value='2'>2</option>
//                 <option value='3'>3</option>
//                 <option value='4'>4</option>
//                 <option value='5'>5</option>
//             </select>
//             </label>
//             <button onClick={()=>updateToCart(products.id, this.state.quantity)}>Submit</button>
//         </div>
//         )
//     }
// }

// export default CartItem

