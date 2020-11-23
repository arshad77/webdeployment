import React from 'react';
import PRODUCTS from './product-list';
import ProductDetail from './ProductDetail';
import {NavLink} from 'react-router-dom';


class ProductCart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products : PRODUCTS,
      total : 0,
      availItems : false
    }
  }
    componentDidMount(){
    for(let i in this.state.products){
      if(this.state.products[i].quantity > 0){
        this.setState({availItems :true});
      }
    }
    this.totalPriceCalculate();
  }
  

  totalPriceCalculate=()=>{
    const products = this.state.products;
    let total = products.reduce((sum,product)=>parseInt(sum)+parseInt(product.cost),0);
    this.setState({total});
  }

  render(){
    const table = (
    <div>
              <h1>Product Cart</h1>
    <table>
      <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Ratings</th>
          <th>Quantity</th>
          <th>Cost</th>
        </thead>
        { this.state.products.map((value,index)=>{
            return <ProductDetail key={index} product={value} />
               })}       
      </table>
      <div className="pading">
        <button><NavLink to="/productlist">Select Items</NavLink></button>
      </div>
      <div className="pading">
      <h3>Total : {this.state.total}</h3>
      </div></div>);

      const msg = (
        <div>
        <h1>ProductCart</h1>
        <div className="pading">
        <h3>No items are added in the cart.</h3>
        <button><NavLink to="/productlist">Select Items</NavLink></button>
        </div>
      </div>);
      if(this.state.availItems){
    return(
      <div>
      {table}
      </div>
    );
      }
      else{
        return(
          <div>{msg}</div>);
      }
  }
}

export default ProductCart;