import React, { useState } from 'react';

function InputTodo(props) {
  const [state, setState] = useState({
    title: '',
  });
  const { title } = state;
  // eslint-disable-next-line react/prop-types
  const { addTodoProps } = props;
  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title.trim()) {
      addTodoProps(title);
      setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={state.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">Submit</button>
    </form>
  );
}
export default InputTodo;
