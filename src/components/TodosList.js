import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types, object-curly-newline
    const { todos, deleteTodoProps, handleChangeProps, setUpdate } = this.props;
    return (
      <ul>
        {(todos || []).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
