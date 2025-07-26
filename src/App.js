import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './Stylesheet/Navbar.css'; // Optional if you want to style the Navbar
import About from './Components/About';
import './Stylesheet/About.css'; // Optional if you want to style the About page
import Home from './Components/Home';
import './Stylesheet/Home.css';
import Services from './Components/Services';
import './Stylesheet/Services.css'; // Optional if you want to style the Services page 
import Media from './Components/Media';
import './Stylesheet/Media.css'; // Optional if you want to style the Media page
import Experience from './Components/Experience';
import './Stylesheet/Experience.css'; // Optional if you want to style the Experience page
import SearchBar from './Components/SearchBar';
import './Stylesheet/SearchBar.css'; // Optional if you want to style the SearchBar
import SearchResults from './Components/SearchResults';
import './Stylesheet/SearchResults.css'; // Optional if you want to style the SearchResults page

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div>
        <BrowserRouter>
          <Navbar />
        {/* <div>  
        <form className="search1" role="search">
         <SearchBar />
        </form>
    
    </div> */}
    {/* <SearchBar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/media" element={<Media />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          {/* <Services /> */}
        </BrowserRouter>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
