import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/layout';
import Questions from './components/questions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/test" element={<Questions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
