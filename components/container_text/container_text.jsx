import React from 'react';
import "./container_text.css";

function ContainerText(props) {
  return (
    <div className='container_text'>
        <h5>{props.subtitle}</h5>
        <p>{props.text}</p>
        <p>Teste</p>
    </div>
  )
}

export default ContainerText;
