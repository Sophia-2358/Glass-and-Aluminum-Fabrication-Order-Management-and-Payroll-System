import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const orders = [
    {
      orderNo: "ORD-0001",
      customer: "[Customer name]",
      product: "Sliding window",
      status: "In fabrication",
      statusClass: "fabrication"
    },
    {
      orderNo: "ORD-0002",
      customer: "[Customer name]",
      product: "Glass door",
      status: "Ready",
      statusClass: "ready"
    },
    {
      orderNo: "ORD-0003",
      customer: "[Customer name]",
      product: "Sliding door",
      status: "Pending",
      statusClass: "pending"
    },
    {
      orderNo: "ORD-0004",
      customer: "[Customer name]",
      product: "Fixed glass panel",
      status: "Completed",
      statusClass: "completed"
    }
  ];

  return (
    <main className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <section className="company-logo">
          <img src={logo} alt="A.S. De Leon Logo" />
        </section>



        <nav className="sidebar-navigation">

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/orders">Customer orders</Link>
          <a href="#">Transaction Status</a>
          <a href="#">Sales reports</a>
          <a href="#">Employee payroll</a>
          <a href="#">Attendance</a>

        </nav>



        <section className="sidebar-bottom">
          <a href="#">Settings</a>
          <p className="owner-label">Owner</p>
          <a href="#" className="logout-link">Log out</a>
        </section>

      </aside>

      {/* MAIN CONTENT */}
      <section className="main-content">

        {/* HEADER */}
        <header className="dashboard-header">
          <section>
            <h1>Good morning, Owner</h1>
            <p>Monday, October 19, 2026</p>
          </section>

          <button className="new-order-button">
            + New order
          </button>
        </header>

        {/* SUMMARY CARDS */}
        <section className="summary-cards">

          <article className="summary-card">
            <p>Active orders</p>
            <h2>[00]</h2>
            <small>In fabrication or installation</small>
          </article>

          <article className="summary-card">
            <p>Ready for delivery</p>
            <h2>[00]</h2>
            <small>Waiting on the customer</small>
          </article>

          <article className="summary-card">
            <p>Sales this month</p>
            <h2>₱[000,000]</h2>
            <small>From recorded orders</small>
          </article>

          <article className="summary-card">
            <p>Payroll this week</p>
            <h2>₱[000,000]</h2>
            <small>Net wages to release</small>
          </article>

        </section>

        {/* WEEKLY PRODUCTION */}
        <section className="production-section">

          <article className="production-info">
            <p>Weekly production</p>
            <h3>[00] of [00] orders this week</h3>

            <div className="progress-bar">
              <span></span>
            </div>
          </article>

          <article className="inquiry-box">
            <h4>[0] new customer inquiries</h4>
          </article>

        </section>

        {/* RECENT ORDERS AND QUICK ACTIONS */}
        <section className="dashboard-bottom">

          {/* RECENT ORDERS */}
          <article className="recent-orders">

            <header className="section-header">
              <h3>Recent orders</h3>
              <a href="#">View all</a>
            </header>

            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order no.</th>
                  <th>Customer</th>
                  <th>Product or service</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderNo}>
                    <td>{order.orderNo}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>
                      <span className={`order-status ${order.statusClass}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </article>

          {/* QUICK ACTIONS */}
          <article className="quick-actions">

            <h3>Quick actions</h3>

            <button>Create a customer order</button>
            <button>Review customer inquiries</button>
            <button>Process weekly payroll</button>

          </article>

        </section>

      </section>

    </main>
  );
}

export default Dashboard;
