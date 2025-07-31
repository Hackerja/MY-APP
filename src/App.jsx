import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import Blog from "./Blog";
import Blog2 from "./Blog2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog2" element={<Blog2 />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}
