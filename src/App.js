import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Browse from "../src/Pages/Browse";
import WhoIsWatching from "../src/Pages/WhoIsWatching";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="whoiswatching" element={<WhoIsWatching />} />
    </Routes>
  );
}

export default App;
