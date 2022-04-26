import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Characters from './components/Characters'
import AddCharacter from './components/AddCharacter'
import About from './components/About'

const App = () => {
  const [showAddCharacter, setShowAddCharacter] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const charactersFromServer = await fetchCharacters()
      setCharacters(charactersFromServer)
    }

    getCharacters()
  }, [])

  const fetchCharacters = async () => {
    const res = await fetch('http://localhost:5000/characters')
    const data = await res.json()

    return data
  }

  const addCharacter = async (character) => {
    const res = await fetch('http://localhost:5000/characters', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(character),
    })

    const data = await res.json()

    setCharacters([...characters, data])
  }
  const deleteCharacter = async (id) => {
    const res = await fetch(`http://localhost:5000/characters/${id}`, {
      method: 'DELETE',
    })

    res.status === 200
      ? setCharacters(characters.filter((character) => character.id !== id))
      : alert('Error Deleting This Character')
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddCharacter(!showAddCharacter)}
          showAdd={showAddCharacter}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddCharacter && <AddCharacter onAdd={addCharacter} />}
                {characters.length > 0 ? (
                  <Characters
                    characters={characters}
                    onDelete={deleteCharacter}
                  />
                ) : (
                  'No Character To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
