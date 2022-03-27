import React, { useState } from 'react';
import styles from './TodoItem.module.css';

export default function TodoItem(props) {
  const [state, setState] = useState({
    editing: false,
  });
  const handleEditing = () => {
    setState({
      editing: true,
    });
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setState({ editing: false });
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const viewMode = {};
  const editMode = {};

  if (state.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  // eslint-disable-next-line object-curly-newline, react/prop-types
  const { todo: { completed, id, title }, handleChangeProps, deleteTodoProps, setUpdate } = props;

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}
