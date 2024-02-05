import React, { Component } from 'react'

export class Inputs extends Component {
  render() {
    return (
        <form className='form' onSubmit={this.props.test}>
          <input type="text" className='input' name='txtInput1' placeholder='1.Oyuncu Adı'/>
          <button type='submit' className='button'>Gönder</button>
        </form>
    );
  }
}

export default Inputs