import React from 'react'

export default function End(props) {
  return (
    props.kazanan !== "" ? 
      <div className='end'>
        <p className='end-text'>Kazanan: {props.kazanan}</p>
        <button className='reset-btn' onClick={props.resetGame}>Oyunu Yeniden Başlat</button>
      </div>
    :""
  )
}
