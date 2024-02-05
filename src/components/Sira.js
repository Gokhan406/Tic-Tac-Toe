import React from 'react'

export default function Sira(props) {
  return (
    <div className='sira'>
      {props.sira === "x" ? <p className='inner-text'>Sıra {props.oyuncu1}'da</p>:<p className='inner-text'>Sıra {props.oyuncu2}'da</p>}
    </div>
  );
}