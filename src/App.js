import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { ListInsert } from './style';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);

  }

  addItem(newItem){
    var itemDetails = { id: Date.now(), value: newItem};
    this.setState(prevState => ({
    items : prevState.items.concat(itemDetails)}));
  }

  render() {
    return (
      <ListInsert>
        <h3 className="header">Insertion List</h3>
        <TodoForm addItem={this.addItem} />
        <TodoList items={this.state.items} />
      </ListInsert>
    );
  }


}

export default TodoApp;
