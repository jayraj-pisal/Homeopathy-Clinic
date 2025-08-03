import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Media from './Components/Media';
import Experience from './Components/Experience';
import Futter from './Components/Futter';


function App() {
  return (
    <>
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Navbar />
      </header>         
          <Home />  
          <About />   
           <Services /> 
          <Media />
          <Experience />
          <Futter /> 
   </div>
  </BrowserRouter>
    </>
  );
}

export default App;
   