import React from 'react';

class SelectProducts extends React.Component{
  render(){
    return(<tr>
    <td>{this.props.product.name}</td>
    <td>{this.props.product.price}</td>
    <td>{this.props.product.ratings}</td>
    </tr>
    )
  }
}

export default SelectProducts; 