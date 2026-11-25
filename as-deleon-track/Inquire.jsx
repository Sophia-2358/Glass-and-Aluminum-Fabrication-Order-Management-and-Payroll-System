
import React from "react";
import "./Inquire.css";

function Inquire() {
    return (
        <section className="inquiry-card">

            <h2>Inquire Now</h2>

            <form className="inquiry-form">

                <div className="form-row">

                    <div className="form-group">
                        <label>Your name</label>
                        <input
                            type="text"
                            placeholder="Full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact number</label>
                        <input
                            type="tel"
                            placeholder="09XX XXX XXXX"
                            required
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label>What do you need?</label>

                    <select required defaultValue="">
                        <option value="" disabled>
                            Select a product
                        </option>
                        <option value="Sliding Window">Sliding Window</option>
                        <option value="Sliding Door">Sliding Door</option>
                        <option value="Glass Door">Glass Door</option>
                        <option value="Aluminum Door">Aluminum Door</option>
                        <option value="Glass Partition">Glass Partition</option>
                        <option value="Aluminum Cabinet">Aluminum Cabinet</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        placeholder="Tell us about your project"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Send Inquiry
                </button>

            </form>

        </section>
    );
}

export default Inquire;
