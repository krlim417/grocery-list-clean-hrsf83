import React from 'react';
import index from '../index.jsx';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null,
      description: ''
    }
    this.onInputChangeUpdateState = this.onInputChangeUpdateState.bind(this);
    this.onAddGroceryClickAddItem = this.onAddGroceryClickAddItem.bind(this);
  }

  onAddGroceryClickAddItem(e) {
    e.preventDefault();
    this.props.func(this.state);
  }

  onInputChangeUpdateState(e) {
    if (e.target.id === 'quantity') {
      this.state[e.target.id] = parseInt(e.target.value);
    } else {
      this.state[e.target.id] = e.target.value;
    }
  }

  render () {
    return (
      <div>
        <form>
          Description: <input type="text" id="description" onChange={this.onInputChangeUpdateState} /><br />
          Quantity: <input type="text" id="quantity" onChange={this.onInputChangeUpdateState} />
          <input type="submit" value="Add Grocery" onClick={this.onAddGroceryClickAddItem} />
        </form>
      </div>
    )
  }
}

export default AddGrocery;

