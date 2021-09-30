// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
    
  }
  return (
      // <div className="blank">Vishal</div>
      <>
      <Navbar title ="TextUtils" mode={mode} aboutText = "About-TextUtils" toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForms heading ="Enter the Text to Analyze " />
      </div>
      </>
  );
}

export default App;
