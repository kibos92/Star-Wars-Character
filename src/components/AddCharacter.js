import { useState } from 'react'
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'

const AddCharacter = ({ onAdd }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [mass, setMass] = useState('')
  const [eye_color, setEye_color] = useState('')
  const [gender, setGender] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a task')
      return
    }

    onAdd({ id, name, height, mass, eye_color, gender })

    setId(uuidv4())
    setName('')
    setHeight('')
    setMass('')
    setEye_color('')
    setGender('')
  }
      const colors = 
[
  {value: 'green', label: 'Green'},
  {value: 'blue', label: 'Blue'},
  {value: 'yellow', label: 'Yellow'},
  {value: 'brown', label: 'Brown'},
  {value: 'black', label: 'Black'}
];

const genders = 
[
  {value: 'male', label: 'Male'},
  {value: 'female', label: 'Female'},
  {value: 'n/a', label: 'N/A'}
];


  return (
    
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='name'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Height</label>
        <input
          type='text'
          placeholder='Add Height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Mass</label>
        <input
          type='text'
          placeholder='Add Mass'
          checked={mass}
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Eye Color</label>
        <Select
          placeholder="Select Eye color"
          onChange={(e) => setEye_color(e.value)}
          options={colors}
        />
      </div>
      <div className='form-control'>
        <label>Gender</label>
        <Select
          placeholder="Select Gender"
          onChange={(e) => setGender(e.value)}
          options={genders} 
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
  
export default AddCharacter