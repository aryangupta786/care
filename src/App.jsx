import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "./layouts/Landing";
import React from 'react';

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />} />

      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />

      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
