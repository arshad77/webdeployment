import React from 'react';
import PRODUCTS from './product-list';
import Product from './Product';
import {NavLink} from 'react-router-dom';

class ProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products : PRODUCTS,
      total : 0,
    }
  }

  updateProduct=(product)=>{
    const index = this.state.products.findIndex(element=>element.name===product.name);
    let products = [...this.state.products];
    products[index]={...products[index],cost:product.cost,quantity:product.quantity};
    this.setState({products});
  }

  render(){
    return(
      <div>
      <h1>Products List</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Ratings</th>
          <th>Quantity</th>
          <th>Cost</th>
        </thead>
        { this.state.products.map((value,index)=>{
            return <Product key={index} product={value} updateProduct={this.updateProduct}/>
               })}
      </table>
      <span className="pading">
        <button><NavLink to="/productcart">View Cart</NavLink></button>
      </span>
      </div>
    )
  }
}

export default ProductTable;