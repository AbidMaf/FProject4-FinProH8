import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import {
  Home,
} from './components/screen'

function App() {
  useEffect(() => {
    document.title = "React App"
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
