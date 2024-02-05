import React, { Component } from 'react'

export class Inputs2 extends Component {
  render() {
    return (
        <form className='form' onSubmit={this.props.test}>
          <input type="text" className='input' name='txtInput2' placeholder='2.Oyuncu Adı'/>
          <button type='submit' className='button'>Gönder</button>
        </form>
    );
  }
}

export default Inputs2