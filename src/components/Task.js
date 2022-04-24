import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.name}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>Height: {task.height}cm</p>
            <p>Mass: {task.mass}kg</p>
            <p>Eye color: {task.eye_color}</p>
            <p>Gender: {task.gender}</p>
        </div>
  )
}

export default Task
