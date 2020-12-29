import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './reset.css'
import './Navbar.css'



export class Navbar extends Component {
    render() {
        return (
        <nav className='nav-container'>
            <ul  className='nav-links'>
                <li className="nav-item"><h1 className='logo'>Fetch Cart</h1></li>
                <li className="nav-item" ><Link to ='/petfoods'>Pet Foods </Link></li>
                <li className="nav-item"><Link to ='/pettoys'>Pet Toys </Link></li>
                <button className='hambtn'>Menu</button>
            </ul>
        </nav>
    )
}
}

export default Navbar
            
          
             
            

                

              
                    

                   
                    

                   
                   

