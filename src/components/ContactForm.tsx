"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Request a Free Quote</h3>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Smith" required />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Your Company" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john@company.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service">
          <option value="">Select a service...</option>
          <option value="ftl">Full Truckload (FTL)</option>
          <option value="ltl">Less Than Truckload (LTL)</option>
          <option value="flatbed">Flatbed / Open Deck</option>
          <option value="reefer">Refrigerated (Reefer)</option>
          <option value="expedited">Expedited Freight</option>
          <option value="drayage">Drayage / Intermodal</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Shipment Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Origin, destination, commodity, weight, and desired pickup date..."
        />
      </div>
      <button
        type="submit"
        className="btn btn-cta btn-full"
        disabled={submitted}
        style={submitted ? { background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)", boxShadow: "0 2px 12px rgba(74,222,128,0.2)" } : undefined}
      >
        {submitted ? (
          <>
            <i className="fas fa-check"></i> Quote Request Sent!
          </>
        ) : (
          <>
            Send Quote Request
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
