import Button from "./Button"
import Filter from "./Filter"
import Sort from "./Sort"

const Nav = ({onAdd, showAdd }) => {
  return (
    <>
    <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd} 
    />
    <Filter />
    <Sort />
    </>
  )
}

export default Nav