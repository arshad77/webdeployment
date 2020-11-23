import React from 'react';

class ProductDetail extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      product : this.props.product
    }
  }

  handleQuantityChange=(e)=>{
    let quantity = e.target.value;
    let product = this.state.product;
    product.quantity = quantity;
    let cost = product.quantity * product.price;
    product.cost = cost;
    this.setState({product});
  }
  

  render(){
    if(this.state.product.quantity>0){
    return(<tr>
    <td>{this.state.product.name}</td>
    <td>{this.state.product.price}</td>
    <td>{this.state.product.ratings}</td>
    <td>{this.state.product.quantity}</td>
    <td>{this.state.product.cost}</td>
    </tr>
    )}
    else{
      return<tr></tr>
    }
  }
}

export default ProductDetail; 