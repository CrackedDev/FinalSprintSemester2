import "./App.css";
import React from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Products from "./Components/Products";
import IMAGES from "./Components/images/index.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    //Router links to buttons
    <Router>
      <div className="App">
        <img src={IMAGES.logo} alt="Logo" width="400" />
        <h1>CodeBusters Video Store</h1>
        <button id="Home">
          <a href="/">
            <img src={IMAGES.homeButton} alt="Home" />
          </a>
        </button>
        <button id="Products">
          <a href="/Products">
            <img src={IMAGES.catalogueButton} alt="Catalogue" />
          </a>
        </button>
        <button id="Contact">
          <a href="/Contact">
            <img src={IMAGES.contactButton} alt="Contacts" />
          </a>
        </button>
      </div>

      <div id="intro">
        <p>
          <strong>
            CodeBusters Video Store sells Magic Pumpkins and Video Tapes. Our
            store was founded five minutes ago by Scott Hartley, Cody Barrett,
            and Noah Gosse. Our purpose here is to provide you with the best
            Video Tapes with cat's dragging blankets as well as the magic's of
            coding that no one understands.
          </strong>
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
