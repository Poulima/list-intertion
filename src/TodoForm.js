import React from 'react';
import { Button } from './style';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.props.addItem(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder='Add an item'
          />
          <Button disabled={!this.state.text.length}>
            Insert
          </Button>
        </form>
    );
  }
}

export default TodoForm;
