// import logo from './logo.svg';
import './App.css';
import { Alert } from './MyComponents/Alert';
import { Header } from "./MyComponents/Header";
import { TextForm } from "./MyComponents/TextForm";
import { About } from './MyComponents/About';
// import { Footer } from "./MyComponents/Footer";
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2f32';
      showAlert("Dark Mode  Has been Enabled","success");
      // document.title="TextUtils - darkmode";
      // setInterval(() => {
      //   document.title="TextUtils - Amazing Website";
      // }, 1000);
      // setInterval(() => {
      //   document.title="Installing........";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode  Has been Enabled",'success');
      // document.title="TextUtils - lightmode";
    }
  }
  return (
    <>
    <Router>
      <Header title="TextUtils" mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} text="Enter the to Analyze below" mode={mode} />}>
          </Route>
          <Route exact path="/about"  element={<About mode={mode}/>}>
          </Route>
      </Routes>
      
      {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
