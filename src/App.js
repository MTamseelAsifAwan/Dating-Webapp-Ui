import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Home';
import FillExample from './infopage';
import AutoLayoutExample from './Homepage';
import Chatview from './Chatview';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FillExample />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Chatview" element={<Chatview />} />
        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
