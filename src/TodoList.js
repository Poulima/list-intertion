import React from 'react';
import { List, ListItem } from './style';

class TodoList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <List className="list-unstyled">
          {items.map((item,index) => (
            <ListItem key={item.id} style={{ color: ( index+1 ) % 3  === 0 ? '#d44646' : 'black'}}>{item.value}</ListItem>
          ))}
        </List>

        { items.length === 0 && (<div className='empty-state'> No items are available. Please add!</div>)}
      </div>

    );
  }
}

export default TodoList;
