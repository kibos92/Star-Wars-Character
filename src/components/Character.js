import { FaTimes } from 'react-icons/fa'

const Character = ({ character, onDelete}) => {
  return (
    <div className={`character`}>
            <h3>
                {character.name}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(character.id)}
                />
            </h3>
            <p>Height: {character.height}cm</p>
            <p>Mass: {character.mass}kg</p>
            <p>Eye color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
        </div>
  )
}

export default Character
