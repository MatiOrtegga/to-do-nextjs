"use client";
// Import neccesary components and hooks.
import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoIntro from "./ToDoIntro";
import ToDoList from "./ToDoList";
function Container() {
  // Declare necessary state variables with initial values.
  const [todo, setTodo] = useState({id: "", todoText: "",isCompleted: false,});
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState(" ");
  
  // Load the saved todos from the local storage when the component mounts.
  useEffect(() => {
    const storedTodos = localStorage.getItem("Todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Update the value state as the user types
  function handleInputChange(event) {
    setValue(event.target.value);
    setTodo({id: todos.length + 1,todoText: event.target.value, isCompleted: false,});
  };
  // Handle the form submission event
  function handleFormSubmit(event) {
    // Prevent the page from restarting when the form is submitted.
    event.preventDefault();
    // Add the new todo to the todos state array and save to local storage
    setTodos([...todos, todo]);
    localStorage.setItem("Todos", JSON.stringify([...todos,todo]));
    // Reset the todo and value state
    setTodo({ id: "", name: "", isCompleted: false });
    setValue("");
  };
  // Handle the delete button click event.
  function handleDelete(id) {
    // Find the index of the todo with the given id in the todos array.
    const index = todos.findIndex((todo) => todo.id === id);
    // Check if the todo exists in the array.
    if (index !== -1) {
     // If it exists, create a new array with all the todos except the one at the given index.
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      // Update the todos state array and save it to local storage.
      setTodos(newTodos);
      localStorage.setItem("Todos", JSON.stringify([...newTodos]));
    }
  };
  // Update the todo array when the checkbox is checked or not.
  function handleCompletedTodos(event,id) 
  {
    const updateTodos = todos.map(todo => 
      {
        if(todo.id === id)   return {...todo,isCompleted: event.target.checked};
        else return todo;
      })
     setTodos(updateTodos);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <ToDoIntro />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <ToDoForm handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} value={value}/>
            <ToDoList todos={todos} handleDelete={handleDelete} handleChange={handleCompletedTodos}></ToDoList>
          </div>
        </div>
      </div>
    </>
  );
}
export default Container;
