import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import MemoryDetail from "./pages/MemoryDetail";

const App = () => {
  return (
    <Router> {/* Router must wrap everything that uses routing functionality */}
      <Header /> {/* Display the header on every page */}
      <Routes>
        <Route path="/" element={<CardList />} /> {/* Default route showing memory cards */}
        <Route path="/memory/:id" element={<MemoryDetail />} /> {/* Route for individual memory details */}
      </Routes>
      <Footer /> {/* Display the footer on every page */}
    </Router>
  );
};

export default App;
