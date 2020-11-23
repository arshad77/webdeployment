import {BrowserRouter as Router , Route, NavLink, Switch} from 'react-router-dom';
import React from 'react';
import ProductCart from './ProductCart';
import ProductTable from './ProductTable';

class ProductList extends React.Component{
  

  render(){
    
    return( 
    <div>
      <h1>Product Mart</h1>
      <h3 className="margin">Hi {this.props.name}!</h3>
      <Router>
        <h3 className="margin">Menu:</h3>
      <ul>
        <li>
          <NavLink to="/productlist" exact activeStyle={
              {color : 'red'}
            }>Items</NavLink>
            </li>
            <li><NavLink to="/productcart" exact activeStyle={
              {color : 'red'}
            }>Cart</NavLink>
            </li>
        </ul>
        <Switch>
        <Route exact  path='/productlist' component={ProductTable}/>
        <Route exact  path='/productcart' component={ProductCart}/>
        </Switch>
       
    </Router>
    </div>)
  };
}

export default ProductList;