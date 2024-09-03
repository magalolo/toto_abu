import React from 'react';
import "./todoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleExclamation, faTrash,  } from '@fortawesome/free-solid-svg-icons'; // Импортируйте необходимые иконки

const TodoItem = ({ item, setKey, status, deleteTodo, findCorrect }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          disabled={status === "trash"}
 
          checked={item.completed}
        />
        <p className="todo-item-text">{item.text}</p>
      </div>

      <div className="todo-item-right">

            <button onClick={() => findCorrect(item.id)}>
              <FontAwesomeIcon icon={faPen} /> 
            </button>

            <button
              className={item.important ? "important" : ""}
              onClick={() => setKey(item.id)}
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
            </button> 

            <button onClick={() => deleteTodo(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
  

      </div>
    </div>
  );
};

export default TodoItem;
