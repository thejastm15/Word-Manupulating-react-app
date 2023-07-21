import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/Textform';

function App() {
  return (
    <>
    <Navbar title = 'textUtil'/>
    <TextForm heading='Enter the text'/>
    {/* <About/> */}
    </>
  )
}

export default App;
