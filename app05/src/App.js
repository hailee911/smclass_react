import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Form from './components/Form';
import Nav from './components/Nav';
import Home from './pages/Home';
import MemList from './pages/MemList';
import MemWrite from './pages/MemWrite';
import MemView from './pages/MemView';
import MList from './pages/MList';
import MWrite from './pages/MWrite';
import MView from './pages/MView';


//페이지 분기
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {


  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MemList" element={<MemList />} />
          <Route path="/MemWrite" element={<MemWrite />} />
          <Route path="/MemView" element={<MemView />} />
          <Route path="/MemView/:id" element={<MemView />} />
          
          <Route path="/MList" element={<MList />} />
          <Route path="/MWrite" element={<MWrite />} />
          <Route path="/MView" element={<MView />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
