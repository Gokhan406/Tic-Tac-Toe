import React from 'react'

export default function StartBtn(props) {
  return (
    <marquee behavior="slide" direction="up" className="start-btn-parent">
      <button type='submit' className='start-btn' onClick={props.nextPage}><p className='btn-text'>Oyuna Başla</p></button>
    </marquee>
  );
}