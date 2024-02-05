import React from 'react';
import Boxes from './components/boxes';
import Sira from './components/Sira';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      kutucuklar : [
        {durum:"",id:1},
        {durum:"",id:2},
        {durum:"",id:3},

        {durum:"",id:4},
        {durum:"",id:5},
        {durum:"",id:6},

        {durum:"",id:7},
        {durum:"",id:8},
        {durum:"",id:9},
      ],

      prev : [
        {durum:"",id:1},
        {durum:"",id:2},
        {durum:"",id:3},

        {durum:"",id:4},
        {durum:"",id:5},
        {durum:"",id:6},

        {durum:"",id:7},
        {durum:"",id:8},
        {durum:"",id:9},
      ],
      sıra:"x",
      sıraisim:"",
    }
  }

  resetGame = () => {
    this.setState({kutucuklar:this.state.prev,sıra:"x",sıraisim:""})
  }

  Isaretle = (kutuid) =>{
    this.setState(
      this.state.kutucuklar.map(kutu => {
        if((kutu.id === kutuid) && (kutu.durum === "")){
          if((this.state.sıra === "x") && (kutu.durum === "")){
            return(this.state.sıra="o",this.state.sıraisim=this.props.oyuncu2,kutu.durum="x")
          }

          if((this.state.sıra === "o") && (kutu.durum === "")){
            return(this.state.sıra="x",this.state.sıraisim=this.props.oyuncu1,kutu.durum="o")
          }
        }
      })
    );
  }

  render(){
    return(
      <div>
        <Sira sira={this.state.sıra} oyuncu1={this.props.oyuncu1} oyuncu2={this.props.oyuncu2}/>
        <Boxes resetGame={this.resetGame} boxes={this.state.kutucuklar} Isaretle={this.Isaretle} oyuncu1={this.props.oyuncu1} oyuncu2={this.props.oyuncu2}/>
      </div>
    );
  }
}

export default App;