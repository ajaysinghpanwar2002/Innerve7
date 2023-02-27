import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Home from './pages/Home';
import Hotels from "./pages/Hotels";
import HotelDetail from "./pages/HotelDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </Router>
  );
}

export default App;