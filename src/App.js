import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name = "Kushagra";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  function toggleMode() {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33,37,41)';
      showAlert('DarkMode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('LightMode enabled', 'success');
    }
  };


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function getColor(color) {
    console.log(color.hex);
    if (mode == 'dark')
      document.body.style.backgroundColor = `${color.hex}`;
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

      {/* <Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} getColor={getColor} />
      <Alert alert={alert} />
      <div className="container my-3" >
        {/* <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route> */}

        {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} > */}
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router > */}
    </>
  );
}

export default App;
