import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ],
      length: length
    }
  }

  render () {
    return (
      <div>
        <form>
          Description: <input type="text" name="description-input" /><br />
          Quantity: <input type="text" name="quantity-input" />
          <input type="submit" value="Add Grocery" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));