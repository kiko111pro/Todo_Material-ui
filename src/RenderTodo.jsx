import React, { useState } from 'react'
import { FiEdit2 } from "react-icons/fi"
import { AiFillDelete } from "react-icons/ai"
import { IconButton, Typography, Checkbox } from "@material-ui/core"
function RenderTodo(props) {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = (index) => {
        var newList = props.todos;
        newList.splice(index, 1);
        props.setTodos([...newList]);
      };
      const handleEdit = (todo, index) => {
        props.input.current.value = todo;
        handleDelete(index);
      };

    return (
        <div className="todo-div" key={props.idx}>
              <Checkbox color="primary" onChange={() => setIsDone(!isDone)} />
              <Typography variant="overline" style={{textDecoration: `${isDone ? 'line-through' : 'none'}`}} className="todo">{props.todo}</Typography>
              <IconButton color="primary" onClick={() => handleEdit(props.todo, props.idx)} className="edit-btn">
                  <FiEdit2 />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDelete(props.idx)} className="delete-btn">
                <AiFillDelete />
              </IconButton>
            </div>
    )
}

export default RenderTodo;