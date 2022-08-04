// eslint-disable-next-line 
import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Movie from "./components/Movie";
import './App.css';
import Home from './pages/Home';

function App() {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/film/:id' element={<Movie />}/>
      </Routes>
    </BrowserRouter>
)}

export default App;