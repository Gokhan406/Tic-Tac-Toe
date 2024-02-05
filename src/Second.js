import React, { Component } from 'react'
import Inputs2 from './components/Inputs2'
import Header from './components/Header';
import App from './App'

export class Second extends Component {
    constructor(props){
        super(props);
        this.test = this.test.bind(this)

        this.state={
            error:"",
            next:false,
            oyuncu2:""
        }
    }
    test(event){
        event.preventDefault();

        let oyuncu2 = event.target.elements.txtInput2.value;
        if(oyuncu2 === ""){
            this.setState({error:"Lütfen oyuncu adını girin"})
        }
        else{
            this.setState({next:true,oyuncu2:oyuncu2})
        }
    }
    render() {
        if(!this.state.next){
            return (
                <div>
                    <Header/>
                    <Inputs2 test={this.test}/>
                    {this.state.error !== "" ? <div className='pd'><p>{this.state.error}</p></div>:""}
                </div>
            );
        }
        else{
            return(
                <div>
                    <App oyuncu1={this.props.oyuncu1} oyuncu2={this.state.oyuncu2}/>
                </div>
            )
        }
    }
}

export default Second