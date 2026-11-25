
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";
import CustomerOrders from "./CustomerOrders.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<CustomerOrders />} />
    </Routes>
  );
}

export default App;
