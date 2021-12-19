import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({a: 0, b: 10});

  const handler = () => setState({
    a: state.a + 1,
    b: state.b
  });

  return (
    <div onClick={handler}>
      <p>{state.a}</p>
      <p>{state.b}</p>
    </div>
  );
}

export default App;
