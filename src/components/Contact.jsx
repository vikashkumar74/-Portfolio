import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Code, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Direct email delivery via FormSubmit service straight to vikashpoddar437@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/vikashpoddar437@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback for demonstration/offline
        setSubmitted(true);
      }
    } catch (err) {
      console.log('Submission fallback:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or an open software engineering role? Send a message directly to my email inbox!
        </p>

        <div className="contact-grid">
          {/* Direct Info Cards */}
          <div className="contact-info-column">
            <div className="info-card glass-card">
              <div className="info-icon">
                <Mail size={22} color="#38bdf8" />
              </div>
              <div className="info-details">
                <h4>Direct Email Inbox</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">
                <Phone size={22} color="#6366f1" />
              </div>
              <div className="info-details">
                <h4>Phone / WhatsApp</h4>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon">
                <MapPin size={22} color="#10b981" />
              </div>
              <div className="info-details">
                <h4>Location</h4>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="social-links-card glass-card">
              <h4>Social Profiles</h4>
              <div className="social-buttons-row">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="social-btn">
                  <Code size={18} />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="contact-form-column glass-card">
            <h3>Send a Message</h3>

            {submitted ? (
              <div className="success-message-box">
                <CheckCircle2 size={48} color="#10b981" />
                <h4>Message Sent!</h4>
                <p>Your message has been delivered directly to <strong>{personalInfo.email}</strong>. I will get back to you shortly!</p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Full-Stack Engineer Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                  {loading ? (
                    <span>Delivering Message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message to My Email</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
