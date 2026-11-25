import React, { useState } from "react";
import "./track.css";


function Trackorders() {
  const [orderNumber, setOrderNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [searched, setSearched] = useState(false);

  const [order] = useState({
    number: "ORD-0001",
    product: "Sliding window",
    quantity: 4,
    status: "In fabrication",
    customer: "[Customer name]",
    size: "[W] x [H] in",
    delivery: "[Date]",
    update: "[Date]",
    progress: 2
  });

  const handleSearch = (e) => {
    e.preventDefault();

    if (!orderNumber || !contactNumber) {
      alert("Please enter your order number and contact number.");
      return;
    }

    setSearched(true);
  };

  return (
    
     <div>
        
      <main className="tracking-container">

        <section className="tracking-heading">
            
          <h1>Track your order</h1>
          <p>
            Enter your order number and contact number
            to see the latest update.
          </p>
        </section>

        {/* SEARCH FORM */}
        <section className="search-card">

          <form onSubmit={handleSearch} className="search-form">

            <div className="search-group">
              <label>Order number</label>
              <input
                type="text"
                placeholder="ORD-0001"
                value={orderNumber}
                onChange={(e) =>
                  setOrderNumber(e.target.value)
                }
                required
              />
            </div>

            <div className="search-group">
              <label>Contact number</label>
              <input
                type="tel"
                placeholder="09XX XXX XXXX"
                value={contactNumber}
                onChange={(e) =>
                  setContactNumber(e.target.value)
                }
                required
              />
            </div>

            <button type="submit" className="check-btn">
              Check status
            </button>

          </form>
        </section>

        {/* ORDER DETAILS */}
        {searched && (
          <section className="order-card">

            <div className="order-top">
              <div>
                <p className="order-id">{order.number}</p>

                <h2>
                  {order.product} × [{order.quantity}]
                </h2>
              </div>

              <span className="status-badge">
                {order.status}
              </span>
            </div>

            {/* PROGRESS TRACKER */}
            <div className="progress-tracker">

              {[
                "Order received",
                "In fabrication",
                "Ready",
                "Completed"
              ].map((step, index) => (
                <div className="progress-step" key={step}>

                  <div
                    className={`progress-bar ${
                      index < order.progress ? "done" : ""
                    }`}
                  ></div>

                  <span
                    className={
                      index < order.progress ? "step-active" : ""
                    }
                  >
                    {step}
                  </span>

                </div>
              ))}

            </div>

            {/* CUSTOMER INFORMATION */}
            <div className="order-information">

              <p>
                Customer <span>{order.customer}</span>
              </p>

              <p>
                Size <span>{order.size}</span>
              </p>

              <p>
                Estimated delivery <span>{order.delivery}</span>
              </p>

              <p>
                Last update <span>{order.update}</span>
              </p>

            </div>

          </section>
        )}

        {/* DEFAULT ORDER DISPLAY */}
        {!searched && (
          <section className="order-card">

            <div className="order-top">
              <div>
                <p className="order-id">ORD-0001</p>
                <h2>Sliding window × [4]</h2>
              </div>

              <span className="status-badge">
                In fabrication
              </span>
            </div>

            <div className="progress-tracker">
              {[
                "Order received",
                "In fabrication",
                "Ready",
                "Completed"
              ].map((step, index) => (
                <div className="progress-step" key={step}>
                  <div
                    className={`progress-bar ${
                      index < 2 ? "done" : ""
                    }`}
                  ></div>
                  <span className={index < 2 ? "step-active" : ""}>
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="order-information">
              <p>Customer <span>[Customer name]</span></p>
              <p>Size <span>[W] × [H] in</span></p>
              <p>Estimated delivery <span>[Date]</span></p>
              <p>Last update <span>[Date]</span></p>
            </div>

          </section>
        )}

        {/* ADDITIONAL REQUEST */}
        <section className="additional-card">

          <div>
            <h3>Need to add something?</h3>
            <p>
              You can send a request for items covered by your contract.
            </p>
          </div>

          <button className="request-btn">
            Send a request
          </button>

        </section>

        {/* FOOTER */}
        <footer className="tracking-footer">
          Questions about your order? Contact the shop at
          {" "}[shop contact number].
        </footer>

      </main>
    </div>
  );
}

export default Trackorders;