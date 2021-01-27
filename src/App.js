import {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Display from './components/Navbar/Display'





function App() {
  const [total, setTotal] = useState(0)
  return (
    <div>
    <Navbar/>


    <Switch>
        <Route exact path='/'>
          <Display/>
        </Route>
        <Route path='/cart'> 
     
        <Cart total={total} setTotal = {setTotal}/>
        </Route>
        <Route path='/products/:type/:animal' component={Products}></Route>
        <Route path='/checkout'>
          <Checkout total={total}/>
        </Route>

    </Switch>
    </div>
        
        



  
  );
}

export default App;
