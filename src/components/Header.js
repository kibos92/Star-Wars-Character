import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'

const Header = ({ title, onAdd, showAdd, onFilter, showFilter, onSort, showSort }) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
        {location.pathname === '/' && (
        <Nav 
        onAdd={onAdd} showAdd={showAdd} 
        onFilter={onFilter} showFilter={showFilter} 
        onSort={onSort} showSort={showSort}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Star Wars Character',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
