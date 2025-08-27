import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <section className="position-relative" >
        {/* 🔹 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
        >
          <source src="/assets/videos/contact-us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        {/* 🔹 Foreground Content */}
        <div className="container position-relative py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="card shadow-lg border-0 rounded-4 p-4 " style={{backgroundColor: "var(--taupe-text)"}}>
                <h2 className="text-center mb-3">📩 Contact Us</h2>
                <p className="text-center text-muted mb-4">
                  Have questions? We’d love to hear from you. Fill out the form below!
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      style={{background: "var(--mocha-dark)", color: 'white'}}
                      className="btn px-5 py-2 rounded-pill"
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
       <Footer />
    </>
  );
}
