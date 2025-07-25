import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import Blog from "./Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
