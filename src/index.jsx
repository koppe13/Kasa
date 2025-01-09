import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/home/home.jsx";
import Header from "./components/main/Header.jsx";
import Footer from "./components/main/Footer.jsx";
import Error404 from "./pages/error404/error404.jsx";
import Apropos from "./pages/apropos/apropos.jsx";
import Logement from "./pages/logement/logement.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainpropos" element={<Apropos />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


