import React from "react";
// import Login from "./Login"
// import Logout from "./Logout"
import { useState, useRef } from "react";
import RenderTodo from "./RenderTodo"

import { Button, TextField, Card } from "@material-ui/core"
import "./App.css";

function App() {
  const input = useRef();
  const [todos, setTodos] = useState([]);


  const handleSubmit = e => {
    if (!input.current.value) {
      alert("Can't leave the field empty!");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    setTodos([...todos, input.current.value]);
    input.current.value = "";
  };
  
  return (
    <div className="App">
      <div className="App_container">
      {/* <Login /> */}
      {/* <Logout /> */}
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
            <RenderTodo todo={todo} idx={idx} input={input} todos={todos} setTodos={setTodos} />
          ))}
        </Card>
      </div>
    </div>
  );
}

export default App;
