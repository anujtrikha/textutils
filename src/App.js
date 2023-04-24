import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform';
import About from './components/About'
import { useState } from 'react'; 
import Alert from './components/Alert';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  let [mode,setMode]=useState('light');
  let [alert,setAlert]=useState(null);
  let location =useLocation();
  let showAlerts=(type,msg)=>{
    setAlert({type:type,message:msg});
    setTimeout(()=>{
      setAlert(null);
     },1500);
  }
  let toggleMode=()=>{
    console.log(location.pathname);
    let textarea='';
    if(location.pathname=='/home'||location.pathname=='/'){
    textarea=document.getElementById('mybox');}

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#02032f';
      if(location.pathname=='/home'||location.pathname=='/'){
      textarea.style.backgroundColor= '#3a3d4e';}

      showAlerts('success','Dark mode enabled');
      document.title='TextUtils- Dark Mode';
      
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    if(location.pathname=='/home'||location.pathname=='/'){
    textarea.style.backgroundColor='white';}
    showAlerts('success','Light mode enabled');
    document.title='TextUtils- Light Mode';
    
  }

}
let enableText = (mode==='light'? 'dark':'light');
  return (
    <>
    <Navbar title='TextUtils' about='About TextUtils' changeMode={toggleMode} mode={mode} enableText={enableText} />
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<Textform heading='Enter Text to analyze' mode={mode} showAlerts={showAlerts}/>}></Route>
      <Route path='/home' element={<Textform heading='Enter Text to analyze' mode={mode} showAlerts={showAlerts}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact-us' element={<Contact/>}></Route>
    </Routes>
    {/* <About/> */}
    {/* <Textform heading='Enter Text to analyze' mode={mode} showAlerts={showAlerts}/> */}

     </>
  );
}

export default App;
