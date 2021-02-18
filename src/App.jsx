import React from "react";
import { useState, useRef } from "react";
import { FiEdit2 } from "react-icons/fi"
import { AiFillDelete } from "react-icons/ai"
import { Button, TextField, Card, IconButton, Typography } from "@material-ui/core"
import "./App.css";

function App() {
  const input = useRef();
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    if (!input.current.value) {
      alert("Can't leave the field empty!");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    setTodos([...todos, input.current.value]);
    input.current.value = "";
  };
  const handleDelete = (index) => {
    var newList = todos;
    newList.splice(index, 1);
    setTodos([...newList]);
  };
  const handleEdit = (todo, index) => {
    input.current.value = todo;
    handleDelete(index);
  };

  return (
    <div className="App">
      <div className="App_container">
        <form className="container-input-section" onSubmit={handleSubmit}>
          <TextField
            className="input"
            autoFocus
            placeholder="i.e. Buy eggs while Shopping"
            type="text"
            inputRef={input}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
        <br /><br />
        <Card raised="true" className="todos">
          {todos.map((todo, idx) => (
            <div className="todo-div" key={idx}>
              <Typography variant="overline" className="todo">{todo}</Typography>
              <IconButton color="primary" onClick={() => handleEdit(todo, idx)} className="edit-btn">
                  <FiEdit2 />
              </IconButton>
              <IconButton color="secondary" onClick={() => handleDelete(idx)} className="delete-btn">
                <AiFillDelete />
              </IconButton>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default App;
