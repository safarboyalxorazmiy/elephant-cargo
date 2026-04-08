"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { createPortal } from "react-dom";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.ottoeld.com";

const services = [
  { value: "", label: "Select a service..." },
  { value: "ftl", label: "Full Truckload (FTL)" },
  { value: "ltl", label: "Less Than Truckload (LTL)" },
  { value: "flatbed", label: "Flatbed / Open Deck" },
  { value: "reefer", label: "Refrigerated (Reefer)" },
  { value: "expedited", label: "Expedited Freight" },
  { value: "drayage", label: "Drayage / Intermodal" },
  { value: "other", label: "Other" },
];

function SuccessModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="ec-modal-overlay" onClick={onClose}>
      <div className="ec-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ec-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="ec-modal-badge">SUCCESS</div>

        <div className="ec-modal-icon">
          <div className="ec-modal-icon-ring" />
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#b8922a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <h3 className="ec-modal-title">Thank You!</h3>
        <p className="ec-modal-text">
          Your quote request has been received.<br />
          Our logistics team will review your shipment details and get back to you within <strong>1 business hour</strong>.
        </p>

        <div className="ec-modal-divider" />

        <div className="ec-modal-contact">
          <span>Need it sooner?</span>
          <a href="tel:+17404759647">(740) 475-9647</a>
        </div>

        <button className="btn btn-cta ec-modal-btn" onClick={onClose}>
          Got It
        </button>
      </div>
    </div>,
    document.body
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: selectedService || undefined,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch(`${API_URL}/api/contact/elephant-cargo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setShowModal(true);
      setSelectedService("");
      form.reset();

      setTimeout(() => setSubmitted(false), 3000);
    } catch (_err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const selectedLabel = services.find((s) => s.value === selectedService)?.label || "Select a service...";

  return (
    <>
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
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
          <label>Service Needed</label>
          <input type="hidden" name="service" value={selectedService} />
          <div className={`custom-select${dropdownOpen ? " open" : ""}`} ref={dropdownRef}>
            <button
              type="button"
              className={`custom-select-trigger${selectedService ? " has-value" : ""}`}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <span>{selectedLabel}</span>
              <svg
                className="custom-select-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <ul className="custom-select-options">
              {services.map((s) => (
                <li key={s.value}>
                  <button
                    type="button"
                    className={`custom-select-option${selectedService === s.value ? " selected" : ""}${s.value === "" ? " placeholder-opt" : ""}`}
                    onClick={() => {
                      setSelectedService(s.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {s.value !== "" && selectedService === s.value && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b8922a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
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

        {error && (
          <p style={{ color: "#ef4444", fontSize: 14, margin: "0 0 12px" }}>{error}</p>
        )}

        <button
          type="submit"
          className="btn btn-cta btn-full"
          disabled={submitted || loading}
          style={submitted ? { background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)", boxShadow: "0 2px 12px rgba(74,222,128,0.2)" } : undefined}
        >
          {loading ? (
            <span className="ec-spinner" />
          ) : submitted ? (
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

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </>
  );
}
