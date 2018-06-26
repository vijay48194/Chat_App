import React, { Component } from 'react';
import Chat from './Chat';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <p>
      Chat_App
      </p>
      <Chat/>
      </div>
    );
  }
}
export default App;
