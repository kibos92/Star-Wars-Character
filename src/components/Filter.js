import { useState } from 'react'

const Filter = ({onFilter}) => {
    const [heightMin, setHeightMin] = useState('')
    const [heightMax, setHeightMax] = useState('')
    const [massMin, setMassMin] = useState('')
    const [massMax, setMassMax] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()

      onFilter({heightMin, heightMax, massMin, massMax})

      setHeightMin('')
      setHeightMax('')
      setMassMin('')
      setMassMax('')
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control-check">
        <label>Height Min: </label>
        <input 
          type='number'
          placeholder="Add Min."
          value={heightMin}
          onChange={(e) => setHeightMin(e.target.value)}
          className="form-control-check input"
          />
      </div>
      <div className="form-control-check">
        <label>Height Max: </label>
        <input 
          type='number' 
          placeholder="Add Max."
          value={heightMax}
          onChange={(e) => setHeightMax(e.target.value)}
          className="form-control-check input"
          />
          </div>
          <div className="form-control-check">
        <label>Mass Min: </label>
        <input 
          type='number' 
          placeholder="Add Min."
          value={massMin}
          onChange={(e) => setMassMin(e.target.value)}
          className="form-control-check input"
          />
      </div>
      <div className="form-control-check">
        <label>Mass Max: </label>
        <input 
          type='number' 
          placeholder="Add Max."
          value={massMax}
          onChange={(e) => setMassMax(e.target.value)}
          className="form-control-check input"
          />
      </div>
      <input type='submit' value='Use Filter' className='btn btn-block' />
    </form>
  )
}

export default Filter