import React from 'react';
import { Router } from '@reach/router';
import Hello from './componets/hello'
import Home from './componets/home'
import Numbers from './componets/numbers'
import Word from './componets/word'

function App() {
  return (
    <div className="App">
      <Router>
          <Hello path="/:word/:color/:backround"/>
          <Home path="/home"/>
          <Numbers path="/numbers/:number"/>
          <Word path ="/:word"/>
      </Router>
    </div>
  );
}

export default App;
