
import React, { useState } from "react";

import logo from "./assets/deleon.png";
import Inquire from "./Inquire.jsx";
import Site from "./site.jsx";
import Trackorders from "./Trackorders.jsx";

import "./Inquire.css";
import "./site.css";
import "./track.css";

function App() {
  const [page, setPage] = useState("inquire");

  return (
    <div className="app-container">
      <aside className="sidebar">

        <div className="logo">
          <img src={logo} alt="A.S. De Leon Logo" />
        </div>

        <nav className="sidebar-nav">

          <button
            className={`nav-btn ${page === "inquire" ? "active" : ""}`}
            onClick={() => setPage("inquire")}
          >
            Inquire Now
          </button>

          <button
            className={`nav-btn ${page === "site" ? "active" : ""}`}
            onClick={() => setPage("site")}
          >
            Site Measurement
          </button>

          <button
            className={`nav-btn ${page === "track" ? "active" : ""}`}
            onClick={() => setPage("track")}
          >
            Track Your Order
          </button>

        </nav>

      </aside>

      <main className="main-content">

        <header className="page-header">
          <h1>Glass and aluminum, made to your measurements.</h1>
          <p>
            Sliding windows and doors, fabricated and installed.
            Send us an inquiry and follow your order until it is delivered.
          </p>
        </header>

        {page === "inquire" && <Inquire />}
        {page === "site" && <Site />}
        {page === "track" && <Trackorders />}

        <footer>
          A. S. De Leon Glass and Aluminum Fabrication
          {" "}• 458 Plaza Burgos Street, Barangay 09,
          Balayan, Batangas
        </footer>
      </main>

    </div>
  );
}

export default App;
