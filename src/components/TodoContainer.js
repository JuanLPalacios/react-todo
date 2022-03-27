import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

function TodoContainer() {
  const [state, setState] = useState({
    todos: [],
  });
  const handleChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };
  const delTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };
  const setUpdate = (updatedTitle, id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };
  useEffect(() => {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'));
    if (loadedTodos) {
      setState(loadedTodos);
    } else {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json())
        .then((data) => setState({ todos: data }));
    }
  }, [setState]);
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(state);
    localStorage.setItem('todos', temp);
  }, [state]);
  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={state.todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}
export default TodoContainer;
