import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
     setAlert({
      msg : message,
      type : type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500)
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#091928'
      showAlert(' Dark mode enabled','success ')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(' light mode enabled','success ')
    }
  }
  return (
    <>
    <Navbar title = 'textUtil' mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showAlert = {showAlert} heading='Enter the text'mode={mode}/>
    {/* <About/> */}
    </>
  )
}

export default App;
