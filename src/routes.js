import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './components/Products/Products'

import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

export default (
    <Switch>
        <Route exact path='/' component={Navbar}></Route>
        <Route path='/products/:type/:animal' component={Products}></Route>
        
        <Route path='/cart' component={Cart}></Route>
        <Route path='/checkout' component={Checkout}></Route>

    </Switch>


)