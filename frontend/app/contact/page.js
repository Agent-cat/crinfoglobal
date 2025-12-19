"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "info@crinfoglobal.com",
        }),
      });

      if (response.ok) {
        setSubmitStatus(
          "Message sent successfully! We will get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50 pt-16 py-8 px-6 text-left">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#083b7a] mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Feel free to reach out to us
            using the form below.
          </p>
        </header>

        <div className="space-y-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full">
            <h2 className="text-2xl font-bold text-[#083b7a] mb-6">
              Send Message
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#083b7a] focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="md:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#083b7a] focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#083b7a] focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#083b7a] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {submitStatus && (
                <div
                  className={`md:col-span-2 p-4 rounded-lg ${submitStatus.includes("successfully")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                >
                  {submitStatus}
                </div>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#083b7a] text-white rounded-lg font-semibold hover:bg-[#0a4ea3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#083b7a] mb-6">
                Contact Details
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email:</h3>
                  <p className="text-gray-700">info@crinfoglobal.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Chief Editorial Board,
                    <br />
                    Journal Name: Frontiers in Engineering and Informatics,
                    <br />
                    CRInfo Global Publication (CGP) - a concern of CrevoSys
                    Solutions India Private Limited,
                    <br />
                    2/130, Kattur - POST, Tiruppur - District,
                    <br />
                    Tamil Nadu, India - 641667.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Contact No:
                  </h3>
                  <p className="text-gray-700">+91 90635 00171</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
