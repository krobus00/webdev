import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar'

const Box = (props) => {
  return(
    <div style={{width : '100px', height : '100px', backgroundColor : props.bg}}>
      {props.name}
    </div>
  )
}

function App() {
  const logo = 'WEBDEV'
  return (
    <div className="App">
      <Navbar name={logo}/>
      <Box name='webdev' bg='red'></Box>
      <Box name='webdev' bg='aquamarine'></Box>
      <Box name='webdev' bg='red'></Box>
      <Box name='webdev' bg='red'></Box>
      <Box name='webdev' bg='red'></Box>
    </div>
  );
}

export default App;
