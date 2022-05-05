import { useState } from 'react'

const Sort = ({onSort}) => {
    const [heightAsc, setHeightAsc] = useState('')
    const [heightDesc, setHeightDesc] = useState('')
    const [massAsc, setMassAsc] = useState('')
    const [massDesc, setMassDesc] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()

      onSort({heightAsc, heightDesc, massAsc, massDesc})

      setHeightAsc('')
      setHeightDesc('')
      setMassAsc('')
      setMassDesc('')
    }
    
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Height Ascending</label>
        <input
          type='radio'
          value={heightAsc}
          checked={true}
          onChange={(e) => setHeightAsc(e.target.value)}
          name="sort"
        />
      </div>
      <div className="form-control">
        <label>Height Descending</label>
        <input
          type='radio'
          value={heightDesc}
          onChange={(e) => setHeightDesc(e.target.value)}
          name="sort"
        />
      </div>
      <div className="form-control">
        <label>Mass Ascending</label>
        <input
          type='radio'
          value={massAsc}
          onChange={(e) => setMassAsc(e.target.value)}
          name="sort"
        />
      </div>
      <div className="form-control">
        <label>Mass Descending</label>
        <input
          type='radio'
          value={massDesc}
          onChange={(e) => setMassDesc(e.target.value)}
          name="sort"
        />
      </div>
      <input type='submit' value='Use Sort' className='btn btn-block' />
    </form>
  )
}

export default Sort