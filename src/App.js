import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [info, setInfo] = useState('Nie łączymy w jeden state');

  return (
    <div>
      <h1>{counter}</h1>
      <p>{info}</p>
    </div>
  );
}

export default App;
