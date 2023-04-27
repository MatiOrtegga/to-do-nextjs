// Import icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function toDoList({ todos, handleDelete,handleChange}) {
  return (
    <ul className="list-group">
      {/*Check if the todo array has elements if they have elements return a list of todos.*/}
      {todos.length > 0 ? todos.map((todo) => (
        <li  key={todo.id}  className="list-group-item d-flex justify-content-between align-items-center">
          <input className="form-check-input" type="checkbox" onChange={event => handleChange(event,todo.id)}/>
          {todo.isCompleted ? <p className="todo-completed">{todo.todoText}</p> : <p className="todo-Text">{todo.todoText}</p>}
          <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </li>
      ))  : <p>¡No hay tareas Pendientes!</p>}  {/*If they dont have return a p tag saying that the user dont have tasks.*/}
    </ul>
  );
}
export default toDoList;
