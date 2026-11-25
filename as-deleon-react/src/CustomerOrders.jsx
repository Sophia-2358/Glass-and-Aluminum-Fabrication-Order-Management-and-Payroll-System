import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import "./CustomerOrders.css";

function CustomerOrders() {
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const [product, setProduct] = useState("Sliding window");
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [glassThickness, setGlassThickness] = useState(0);

  const [glassType, setGlassType] = useState("Clear");
  const [frameFinish, setFrameFinish] = useState("Natural");

  const [aluminumRate, setAluminumRate] = useState(0);
  const [glassRate, setGlassRate] = useState(0);
  const [labor, setLabor] = useState(0);

  const [productionStart, setProductionStart] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  // PRICE COMPUTATION
  const area = (Number(width) * Number(height)) / 144;

  const aluminumFeet =
    (2 * (Number(width) + Number(height))) / 12;

  const aluminumPrice =
    aluminumFeet * Number(aluminumRate) * Number(quantity);

  const glassPrice =
    area * Number(glassRate) * Number(quantity);

  const laborPrice =
    Number(labor) * Number(quantity);

  const totalPrice =
    aluminumPrice + glassPrice + laborPrice;

  const formatPrice = (amount) => {
    return amount.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!customerName || !contactNumber || !address) {
      alert("Please complete the customer information.");
      return;
    }

    alert(
      "Customer order details are ready!\n" +
      "Customer: " + customerName + "\n" +
      "Total Price: ₱" + formatPrice(totalPrice)
    );
  };

  const handleCancel = () => {
    setCustomerName("");
    setContactNumber("");
    setAddress("");
    setProduct("Sliding window");
    setQuantity(1);
    setWidth(0);
    setHeight(0);
    setGlassThickness(0);
    setGlassType("Clear");
    setFrameFinish("Natural");
    setAluminumRate(0);
    setGlassRate(0);
    setLabor(0);
    setProductionStart("");
    setDeliveryDate("");
  };

  return (
    <main className="order-page">

      {/* SIDEBAR */}
      <aside className="order-sidebar">

        <section className="order-logo">
          <img src={logo} alt="A.S. De Leon Logo" />
        </section>




        <nav className="order-navigation">

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/orders" className="active-link">
            Customer orders
          </Link>

          <a href="#">Transaction Status</a>
          <a href="#">Sales reports</a>
          <a href="#">Employee payroll</a>
          <a href="#">Attendance</a>

        </nav>

        <section className="order-sidebar-bottom">
          <a href="#">Settings</a>
          <p>Owner</p>
          <a href="#" className="order-logout">Log out</a>
        </section>

      </aside>

      {/* MAIN CONTENT */}
      <section className="order-main">

        <header className="order-header">
          <h1>New customer order</h1>
          <p>
            Details, price computed from the measurements, and delivery schedule
          </p>
        </header>

        <form onSubmit={handleSave}>

          <section className="order-layout">

            {/* LEFT SIDE FORM */}
            <section className="order-form-left">

              {/* CUSTOMER INFORMATION */}
              <article className="form-card customer-card">

                <h2>Customer</h2>

                <section className="customer-fields">

                  <label>
                    Customer name
                    <input
                      type="text"
                      placeholder="Full name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Contact number
                    <input
                      type="tel"
                      placeholder="09XX XXX XXXX"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    Address
                    <input
                      type="text"
                      placeholder="Street, city"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </label>

                </section>
              </article>

              {/* PRODUCT DETAILS */}
              <article className="form-card product-card">

                <h2>Product or service</h2>

                <section className="product-fields">

                  <label className="type-field">
                    Type
                    <select
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                    >
                      <option>Sliding window</option>
                      <option>Glass door</option>
                      <option>Sliding door</option>
                      <option>Fixed glass panel</option>
                      <option>Cabinet</option>
                      <option>Mirror</option>
                    </select>
                  </label>

                  <label className="quantity-field">
                    Quantity
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </label>

                  <label>
                    Width (in)
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </label>

                  <label>
                    Height (in)
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </label>

                  <label>
                    Glass thickness (mm)
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={glassThickness}
                      onChange={(e) => setGlassThickness(e.target.value)}
                    />
                  </label>

                  <label>
                    Glass type
                    <select
                      value={glassType}
                      onChange={(e) => setGlassType(e.target.value)}
                    >
                      <option>Clear</option>
                      <option>Tinted</option>
                      <option>Frosted</option>
                      <option>Reflective</option>
                    </select>
                  </label>

                  <label>
                    Aluminum frame finish
                    <select
                      value={frameFinish}
                      onChange={(e) => setFrameFinish(e.target.value)}
                    >
                      <option>Natural</option>
                      <option>Black</option>
                      <option>White</option>
                      <option>Bronze</option>
                    </select>
                  </label>

                  <label>
                    Aluminum rate (₱/ft)
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      value={aluminumRate}
                      onChange={(e) => setAluminumRate(e.target.value)}
                    />
                  </label>

                  <label>
                    Glass rate (₱/sq ft)
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      value={glassRate}
                      onChange={(e) => setGlassRate(e.target.value)}
                    />
                  </label>

                  <label>
                    Labor and other (₱)
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      value={labor}
                      onChange={(e) => setLabor(e.target.value)}
                    />
                  </label>

                </section>
              </article>

            </section>

            {/* RIGHT SIDE SUMMARY */}
            <aside className="order-form-right">

              {/* ORDER SUMMARY */}
              <article className="summary-box">

                <section className="summary-title">
                  <h2>Order summary</h2>
                  <span className="pending-badge">Pending</span>
                </section>

                <p className="order-number">ORD-0006</p>

                <p>Customer&nbsp; {customerName || "[Customer name]"}</p>
                <p>Product&nbsp; {product} × [{quantity || 0}]</p>
                <p>Size&nbsp; [W] × [H] in</p>

                <p className="summary-measurement">
                  {width || 0} × {height || 0} in
                </p>

              </article>

              {/* PRICE COMPUTATION */}
              <article className="summary-box price-box">

                <h2>Price computation</h2>

                <section className="price-row">
                  <span>Aluminum frame</span>
                  <span>₱{formatPrice(aluminumPrice)}</span>
                </section>

                <section className="price-row">
                  <span>Glass</span>
                  <span>₱{formatPrice(glassPrice)}</span>
                </section>

                <section className="price-row">
                  <span>Labor and other</span>
                  <span>₱{formatPrice(laborPrice)}</span>
                </section>

                <section className="total-row">
                  <h3>Order total</h3>
                  <h3>₱{formatPrice(totalPrice)}</h3>
                </section>

              </article>

              {/* DELIVERY SCHEDULE */}
              <article className="schedule-box">

                <label>
                  Production start
                  <input
                    type="date"
                    value={productionStart}
                    onChange={(e) => setProductionStart(e.target.value)}
                  />
                </label>

                <label>
                  Delivery date
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                  />
                </label>

              </article>

              {/* BUTTONS */}
              <section className="order-buttons">

                <button type="submit" className="save-order-btn">
                  Save order
                </button>

                <button
                  type="button"
                  className="cancel-order-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

              </section>

            </aside>

          </section>

        </form>

      </section>

    </main>
  );
}

export default CustomerOrders;
