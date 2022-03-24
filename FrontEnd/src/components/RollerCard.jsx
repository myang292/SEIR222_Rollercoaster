import React from 'react'

const RollerCard = (props) => {
    <div className="card" onClick={props.onClick}>
    <div className="img-wrapper">
      <img src={props.image} alt={props.image} />
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.height}</p>
      <p>{props.description}</p>
      <p>{props.description}</p>
    </div>
  </div>
}

export default RollerCard