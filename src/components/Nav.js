import Button from "./Button"

const Nav = ({onAdd, showAdd, onSort, showSort, onFilter, showFilter }) => {
  return (
    <>
    <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd} 
    />
    <Button
        color={showFilter ? 'red' : 'green'}
        text={showFilter ? 'Close' : 'Filter'}
        onClick={onFilter} 
    />
    <Button
        color={showSort ? 'red' : 'green'}
        text={showSort ? 'Close' : 'Sort'}
        onClick={onSort} 
    />
    </>
  )
}

export default Nav