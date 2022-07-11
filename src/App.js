

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  React,{ useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=> {
    if(mode === 'dark'){
      setMode('light');

    document.body.style.backgroundColor='light';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }

  }
  return (
    <>
<Navbar title="Text Utils"  mode={mode} toggleMode={toggleMode} />
<div className ="container my-3">
<TextForm heading="Enter or paste your text here" mode={mode} TextForm='white'/>
{/* <About/> */}
</div>
</>
);
} 

export default App;
