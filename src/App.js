import React from "react";
import "./styles/index.scss";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
