import React, { useState, useEffect, useCallback } from "react";

import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

//   const [enteredText, setEnteredText] = useState("");

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const usersData = await response.json();
      setUsers(usersData.users);
    } catch (err) {
      // Error handling would be implemented here
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  //   useEffect(() => {
  //     if (editedTodo) {
  //       setEnteredText(editedTodo.text);
  //     }
  //   }, [editedTodo]);
  //   const startEditHandler = (todo) => {
  //     setEditedTodo(todo);
  //   };

  //   const deleteTodoHandler = async (todoId) => {
  //     const response = await fetch('http://localhost:8000/todos' + todoId, {
  //       method: 'DELETE',
  //     });
  //     const data = await response.json();

  //     console.log(data);
  //     getTodos();
  //   };

  //   const inputHandler = (event) => {
  //     setEnteredText(event.target.value);
  //   };

  //   const submitHandler = async (event) => {
  //     event.preventDefault();
  //     setEditedTodo(null);
  //     setEnteredText('');
  //     let url = 'http://localhost:8000/todos';
  //     let method = 'POST';
  //     if (editedTodo) {
  //       url = url + '/' + editedTodo.id;
  //       method = 'PUT';
  //     }
  //     const response = await fetch(url, {
  //       method,
  //       body: JSON.stringify({
  //         text: enteredText,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     getUsers();
  //   };

  return (
    <React.Fragment>
      {/* <div className="users__form">
        <form onSubmit={submitHandler}>
          <label>Todo Text</label>
          <input type="text" value={enteredText} onChange={inputHandler} />
          <button type="submit">{'Add'} Todo</button>
        </form>
      </div> */}
      
       
       { users && users.length > 0 (
        <ul className="users__list">
          {users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.name}</span>
              {/* <div className="todo__actions">
                <button onClick={startEditHandler.bind(null, todo)}>
                  Edit
                </button>
                <button onClick={deleteTodoHandler.bind(null, todo.id)}>
                  Delete
                </button>
              </div> */}
            </li>
          ))}
        </ul>
      )}  
    </React.Fragment> 
  );
};

export default Users;
