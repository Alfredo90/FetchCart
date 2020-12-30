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
            <ul className='dropmenu'>
                <li className="dropdown"><Link to ='/petfoods/:animal'>Dog</Link></li>
                <li className="dropdown"><Link to ='/petfoods/:animal'>Cat</Link></li>
            </ul>

        <div className='image-links'>
            <img className='pets' alt='dog' src='https://images.unsplash.com/photo-1506242395783-cec2bda110e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
            <img className='pets' alt='dcat' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
            <img className='pets' alt='dog' src='https://images.unsplash.com/photo-1590507090789-0e32929a37dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'/>
            <img className='pets' alt='cat' src='https://images.unsplash.com/photo-1585710679266-8a8774703978?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
        </div>

        </nav>

        )       
}
}

export default Navbar
            
          
             
            

                

              
                    

                   
                    

                   
                   

