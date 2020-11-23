import React from 'react';

class Product extends React.Component{

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
    this.props.updateProduct(this.state.product);
  }
  

  render(){
    return(<tr>
    <td>{this.state.product.name}</td>
    <td>{this.state.product.price}</td>
    <td>{this.state.product.ratings}</td>
    <td><input type="number" min="0" value={this.state.product.quantity} onChange={this.handleQuantityChange}/></td>
    <td>{this.state.product.cost}</td>
    </tr>
    )
  }
}

export default Product; 