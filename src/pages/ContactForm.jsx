import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./../main.css";
import Navbar from "../components/Navbar";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your EmailJS credentials
    const serviceId = "service_1itxm3p";
    const templateId = "template_0okk39t";
    const publicKey = "sm84rSuh9RmGWbAtw";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSending(false);
      },
      (error) => {
        console.error("FAILED...", error);
        alert("❌ Failed to send. Please try again later.");
        setIsSending(false);
      }
    );
  };

  return (
    <>
      <Navbar />
      <section className="contact-us-container" style={{background: "transparent"}}>
  {/* 🔹 Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="contact-bg-video"
  >
    <source src="/assets/videos/contact-us.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔹 Foreground Content */}
  <div className="contact-us-card" style={{background: "transparent"}}>
    <h2 className="contact-us-title">📩 Contact Us</h2>
    <p className="contact-us-subtitle">
      Have questions? We’d love to hear from you. Fill out the form below!
    </p>
    <form onSubmit={handleSubmit} className="contact-us-form">
      <div className="contact-us-field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-us-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-us-field">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-us-field">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
      </div>
      <button type="submit" className="contact-us-btn w-50" disabled={isSending}>
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
</section>

    </>
  );
}
