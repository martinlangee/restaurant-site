import React, { useState } from "react";
import Navbar from "./conponents/Navbar";
import Footer from "./conponents/Footer";
import Home from "./conponents/Home";
import Profil from "./conponents/Profil";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
