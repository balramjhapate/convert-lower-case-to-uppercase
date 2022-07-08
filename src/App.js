
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
<Navbar title="Text Utils" balram="HOME"  />
<div className ="container my-3">
<TextForm heading="Enter or paste your text here"/>
</div>
</>

);
} 

export default App;
