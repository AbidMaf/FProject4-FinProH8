import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
// import {
//   Home,
// } from './components/screen'
import Search from './components/screen/Search';

function App() {
  useEffect(() => {
    document.title = "React App"
  }, [])

  return (
    <div className="App">
      {/* <Home /> */}
      <Search/>
    </div>
  );
}

export default App;
