import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Header from "./components/Header";
import Home from './pages/Home';
import Hotels from "./pages/Hotels";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  );
}

export default App;