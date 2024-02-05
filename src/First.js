import React, { Component } from 'react'
import Header from './components/Header';
import Inputs from './components/Inputs';
import Second from './Second';

export class First extends Component {
  constructor(props){
    super(props);
    this.test = this.test.bind(this);

    this.state = {
      error:"",
      arama:false,
      oyuncu1:""
    }
  }

  test(event){
    event.preventDefault();

    const oyuncu1 = event.target.elements.txtInput1.value;

    if((oyuncu1 === "")){
      this.setState({error:"Lütfen oyuncu adını girin"})
    }
    else{
      this.setState({arama:true,oyuncu1:oyuncu1,error:""})
    }
  }

  render() {
    return(
      <div>
        {this.state.arama === false ? <div><Header/><Inputs test={this.test}/></div>:""}
        {this.state.error !== "" ? <div className='pd'><p>{this.state.error}</p></div>:""}
        {this.state.arama === true ? <Second oyuncu1={this.state.oyuncu1}/>:""}
      </div>
    ); 
  }
}

export default First