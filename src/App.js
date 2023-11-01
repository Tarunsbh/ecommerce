import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </div>
  );
}

export default App;
