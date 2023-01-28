import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Heroes } from './Heroes';
import { About } from './About';
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/heroes" element ={<Heroes/>}/>
          <Route path="/about" element ={<About />}/>  
        </Routes>
      </BrowserRouter>
  );
}

export default App;
