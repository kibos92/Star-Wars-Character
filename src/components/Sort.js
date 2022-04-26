import { useState } from 'react'

const Sort = ({onSort}) => {
    const [heightAsc, setHeightAsc] = useState('')
    const [heightDesc, setHeightDesc] = useState('')
    const [massAsc, setMassAsc] = useState('')
    const [massDesc, setMassDesc] = useState('')

    //onFilter({heightAsc, heightDesc, massAsc, massDesc})

    //setHeightAsc('')
    //setHeightDesc('')
    //setMassAsc('')
    //setMassDesc('')

  return (
    <form className='add-form'>
      <div className='form-control form-control-check'>
        <label>Height Ascending</label>
        <input
          type='checkbox'
          checked={heightAsc}
          value={heightAsc}
          onChange={(e) => setHeightAsc(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Height Descending</label>
        <input
          type='checkbox'
          checked={heightDesc}
          value={heightDesc}
          onChange={(e) => setHeightDesc(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Mass Ascending</label>
        <input
          type='checkbox'
          checked={massAsc}
          value={massAsc}
          onChange={(e) => setMassAsc(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Mass Descending</label>
        <input
          type='checkbox'
          checked={massDesc}
          value={massDesc}
          onChange={(e) => setMassDesc(e.currentTarget.checked)}
        />
      </div>
    </form>
  )
}

export default Sort