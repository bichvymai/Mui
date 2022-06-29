import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <div>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/job/:id"
            element={
              <RequireAuth>
                <DetailPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
