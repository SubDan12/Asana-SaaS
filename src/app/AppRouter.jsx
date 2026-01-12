import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "../pages/Home";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
