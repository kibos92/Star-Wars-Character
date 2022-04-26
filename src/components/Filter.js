import { useState } from 'react'

const Filter = ({onFilter}) => {
    const [heightMin, setHeightMin] = useState('')
    const [heightMax, setHeightMax] = useState('')
    const [massMin, setMassMin] = useState('')
    const [massMax, setMassMax] = useState('')

    //onFilter({heightMin, heightMax, massMin, massMax})

    //setHeightMin('')
    //setHeightMax('')
    //setMassMin('')
    //setMassMax('')

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Height Min: </label>
        <input 
          type='text' 
          placeholder="Add Min."
          value={heightMin}
          onChange={(e) => setHeightMin(e.target.value)}
          />
      </div>
      <div className="form-control">
        <label>Height Max: </label>
        <input 
          type='text' 
          placeholder="Add Max."
          value={heightMax}
          onChange={(e) => setHeightMax(e.target.value)}
          />
          </div>
          <div className="form-control">
        <label>Mass Min: </label>
        <input 
          type='text' 
          placeholder="Add Min."
          value={massMin}
          onChange={(e) => setMassMin(e.target.value)}
          />
      </div>
      <div className="form-control">
        <label>Height From: </label>
        <input 
          type='text' 
          placeholder="Add Max."
          value={massMax}
          onChange={(e) => setMassMax(e.target.value)}
          />
      </div>
    </form>
  )
}

export default Filter