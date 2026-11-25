import React from "react";
import "./site.css";

function site() {
  return (
    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">


        {/* Site Measurement Form */}
        <section className="measurement-card">
          <h2>Request site measurement</h2>

          <form className="measurement-form">

            <div className="form-row">
              <div className="form-group">
                <label>Your name</label>
                <input
                  type="text"
                  placeholder="Full name"
                />
              </div>

              <div className="form-group">
                <label>Contact number</label>
                <input
                  type="tel"
                  placeholder="09XX XXX XXXX"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Address of the site</label>
              <input
                type="text"
                placeholder="Street, barangay, city"
              />
            </div>

            <div className="form-row bottom-row">
              <div className="form-group">
                <label>Preferred date</label>
                <input type="date" />
              </div>

              <button type="submit" className="submit-btn">
                Send request
              </button>
            </div>

          </form>
        </section>

        {/* Footer */}
        <footer>
          A. S. De Leon Glass and Aluminum Fabrication
          {" "}• 458 Plaza Burgos Street, Barangay 09,
          Balayan, Batangas
        </footer>

      </main>
    </div>
  );
}

export default site;