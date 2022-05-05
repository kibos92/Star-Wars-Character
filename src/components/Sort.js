import { useState } from 'react'

const Sort = ({onSort}) => {
    const [heightAsc, setHeightAsc] = useState(false)
    const [heightDesc, setHeightDesc] = useState(false)
    const [massAsc, setMassAsc] = useState(false)
    const [massDesc, setMassDesc] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault()

      onSort({heightAsc, heightDesc, massAsc, massDesc})

      setHeightAsc(false)
      setHeightDesc(false)
      setMassAsc(false)
      setMassDesc(false)
    }
    
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control-check">
        <label className='form-control-check label'>Height Asc.</label>
        <input
          type='radio'
          value={true}
          onChange={(e) => 
            {setHeightAsc(Boolean(e.target.value)) 
            setHeightDesc(false) 
            setMassAsc(false)
            setMassDesc(false)}
          }
          name="sort"
          className="form-control-check input"
        />
      </div>
      <div className="form-control-check">
        <label className='form-control-check label'>Height Desc.</label>
        <input
          type='radio'
          value={true}
          onChange={(e) => 
            {setHeightDesc(Boolean(e.target.value))
            setHeightAsc(false)
            setMassAsc(false)
            setMassDesc(false)}
          }
          name="sort"
          className="form-control-check input"
        />
      </div>
      <div className="form-control-check">
        <label className='form-control-check label'>Mass Asc.</label>
        <input
          type='radio'
          value={true}
          onChange={(e) => 
            {setMassAsc(Boolean(e.target.value))
            setHeightAsc(false)
            setHeightDesc(false)
            setMassDesc(false)}
          }
          name="sort"
          className="form-control-check input"
        />
      </div>
      <div className="form-control-check">
        <label className='form-control-check label'>Mass Desc.</label>
        <input
          type='radio'
          value={true}
          onChange={(e) => 
            {setMassDesc(Boolean(e.target.value))
            setHeightAsc(false)
            setHeightDesc(false)
            setMassAsc(false)}
          }
          name="sort"
          className="form-control-check input"
        />
      </div>
      <input type='submit' value='Use Sort' className='btn btn-block' />
    </form>
  )
}

export default Sort