import React, { Component } from 'react'
import Box from './Box';
import End from './End';

export class Boxes extends Component {
  constructor(props){
    super(props)
    this.sorgula = this.sorgula.bind(this)

    this.state = {
      kazanan:"",
    }
  }

  resetGame = () => {
    this.setState({kazanan:""})
    this.props.resetGame()
  }

  sorgula(){
    // this.props.Isaretle
    if(((this.props.boxes[0].durum === "x") && (this.props.boxes[1].durum === "x" && this.props.boxes[2].durum === "x")) || ((this.props.boxes[3].durum === "x") && (this.props.boxes[4].durum === "x" && this.props.boxes[5].durum === "x")) || ((this.props.boxes[6].durum === "x") && (this.props.boxes[7].durum === "x" && this.props.boxes[8].durum === "x")) || ((this.props.boxes[0].durum === "x") && (this.props.boxes[3].durum === "x" && this.props.boxes[6].durum === "x")) || ((this.props.boxes[1].durum === "x") && (this.props.boxes[4].durum === "x" && this.props.boxes[7].durum === "x")) || ((this.props.boxes[2].durum === "x") && (this.props.boxes[5].durum === "x" && this.props.boxes[8].durum === "x")) || ((((this.props.boxes[0].durum === "x") && (this.props.boxes[4].durum === "x")) && (this.props.boxes[8].durum === "x")) || (((this.props.boxes[2].durum === "x") && (this.props.boxes[4].durum === "x")) && (this.props.boxes[6].durum === "x")))){
      if(this.state.kazanan === ""){
        this.setState({kazanan:this.props.oyuncu1})
      }
    }

    else if(((this.props.boxes[0].durum === "o") && (this.props.boxes[1].durum === "o" && this.props.boxes[2].durum === "o")) || ((this.props.boxes[3].durum === "o") && (this.props.boxes[4].durum === "o" && this.props.boxes[5].durum === "o")) || ((this.props.boxes[6].durum === "o") && (this.props.boxes[7].durum === "o" && this.props.boxes[8].durum === "o")) || ((this.props.boxes[0].durum === "o") && (this.props.boxes[3].durum === "o" && this.props.boxes[6].durum === "o")) || ((this.props.boxes[1].durum === "o") && (this.props.boxes[4].durum === "o" && this.props.boxes[7].durum === "o")) || ((this.props.boxes[2].durum === "o") && (this.props.boxes[5].durum === "o" && this.props.boxes[8].durum === "o")) || ((((this.props.boxes[0].durum === "o") && (this.props.boxes[4].durum === "o")) && (this.props.boxes[8].durum === "o")) || (((this.props.boxes[2].durum === "o") && (this.props.boxes[4].durum === "o")) && (this.props.boxes[6].durum === "o")))){
      if(this.state.kazanan === ""){
        this.setState({kazanan:this.props.oyuncu1})
      }
    }
  }
  
  render() {  
    return (
      <div className='app'>
        {this.props.boxes.map(box => <Box box={box} sorgula={this.sorgula} key={box.id} Isaretle={this.props.Isaretle} boxes={this.props.boxes}/>)}
        <End kazanan={this.state.kazanan} resetGame={this.resetGame}/>
      </div>
    );
  }
}

export default Boxes