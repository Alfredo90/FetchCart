import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PetFoods from './components/PetFoods/PetFoods'
import PetToys from './components/PetToys/PetToys'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

export default (
    <Switch>
        <Route exact path='/' component={Navbar}></Route>
        <Route path='/petfoods' component={PetFoods}></Route>
        <Route path='/pettoys' component={PetToys}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/checkout' component={Checkout}></Route>

    </Switch>


)