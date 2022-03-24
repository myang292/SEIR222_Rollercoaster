import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RideDetails = (props) => {

  let {id} = useParams()

  const [selectedPark, setPark] = useState('')

  useEffect(() => {
    let selectedPark = props.boats.find(
      (boat) => boat.id === parseInt(id)
    )
    setPark(selectedPark)
    
  }, [props.boats, id])

  return selectedPark ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedPark.img} alt={selectedPark.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{selectedPark.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Price: ${selectedPark.price}</h3>
          <h3>Boat ID: {selectedPark.id}</h3>
        </div>
        <p>{selectedPark.description}</p>
      </div>
    </div>
  ) : null;
}

export default RideDetails
