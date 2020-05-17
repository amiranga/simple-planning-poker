import React, { Component } from 'react';
import CardDeck from './components/CardDeck';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardDeck cardNumbers={[1, 2, 3, 4, 5]} />
      </div>
    );
  }
}
export default App;
