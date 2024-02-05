import React, { Component } from 'react'

export class Box extends Component {
  render() {
    if(this.props.box.durum === ""){
      this.props.sorgula()
      return(
        <div onClick={() => this.props.Isaretle(this.props.box.id)} className={`kutu kutu${this.props.box.id} bos`}></div>
      )
    }

    if(this.props.box.durum === "x"){
      return(
        <div onClick={() => this.props.Isaretle(this.props.box.id)} className={`kutu kutu${this.props.box.id} x`}></div>
      )
    }

    if(this.props.box.durum === "o"){
      return(
        <div onClick={() => this.props.Isaretle(this.props.box.id)} className={`kutu kutu${this.props.box.id} o`}></div>
      )
    }
  }
}

export default Box