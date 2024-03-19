import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './layout';
import Questions from './components/Questions';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/quiz" element={<Questions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
