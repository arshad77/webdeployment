import './App.css';
import ProductList from './ProductList';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logged : false,
      name : '',
      password: '',
      err : false
    }
  }
 changeName = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  submitHandler=(e)=>{
    e.preventDefault();
    if(this.state.password==='12345'){
      this.setState({logged:true})
    }
    else{
      this.setState({err : true});
    }
  }

  render(){
    let error = ''
    if(this.state.err){
      error = <p className="alert">invalid credentials</p>
    }
  if(this.state.logged){
  return(<ProductList name={this.state.name}/>);
    }
    else{
      return <div>
        <h1 className="margin">Product Mart</h1>

        <div className="margin">
        
        <form onSubmit={this.submitHandler}>
          <label className="label" htmlFor="name">Name</label>
          <input  type="text" name="name" onChange={this.changeName}/>
          <br/>
          <label htmlFor="name">Password</label>
          <input type="password" name="password" onChange={this.changeName}/>
          <br/><br/>
          {error}
          <span><input type="submit" value="Login"/></span>
        </form>
        </div>
      </div>
    }
}
}

export default App;

