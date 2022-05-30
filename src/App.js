import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
