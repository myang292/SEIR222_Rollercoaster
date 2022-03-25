import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

const ParkForm = (props) => {
  let navigate = useNavigate()
  // const handleSubmit = (e) => {
  //   props.addPark(e)
  //   navigate('/parks')
  // }

    const url = 'http://localhost:3001/api/parks/add-new'
    const [data, setData] = useState({
          name: '',
          description: '',
          location: '',
          address: '',
          url: '',
          img: '',
   })
    function submit (e) {
         e.preventDefault()
         Axios.post(url, {
          name: data.name,
          description: data.description,
          location: data.location,
          address: data.address,
          url: data.url,
          img: data.img
        })
        .then(res => {
           console.log(res.data)
           navigate('/parks')
        })
      }
        function onChange(e) {
          const newdata = { ...data }
          newdata[e.target.id] = e.target.value
          setData(newdata)
          console.log(newdata)
        }

  return (
    <div>
    <h1>Add A New Park</h1>
    <form onSubmit={ submit }>
      <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
      <input type="text-area" id={'description'} name={'description'} placeholder={'Description'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'location'} name={'location'} placeholder={'Location'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'address'} name={'address'} placeholder={'Address'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'url'} name={'url'} placeholder={'Website'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'img'} name={'img'} placeholder={'Image URL'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default ParkForm