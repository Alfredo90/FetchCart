import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import './reset.css'
// import './Navbar.css'



export class Navbar extends Component {
    render() {
        return (
            <nav className='nav-container'>

                <div className='logo'>Fetch Cart</div>

                <div className='nav-links'>
                <ul >
                    <li >Pet Foods </li>
                    <li >Pet Toys </li>
                </ul>
                </div>
                    
                <button className='hambtn'>Menu</button>
                
            </nav>
        )
    }
}

export default Navbar
              
                    

                   
                    

                   
                   

