import React from 'react'
import { useNavigate } from 'react-router-dom'

const ParkForm = (props) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    props.addPark(e)
    navigate('/Parks')

  }

  const newPark = props.newPark

  return (
    <div>
    <h1>Add A New Park</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newPark.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={newPark.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
      <input type="text-area" value={newPark.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
      <input type="text" value={newPark.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} />
      <button>Submit</button>
    </form>
    </div>
  );
}

export default ParkForm