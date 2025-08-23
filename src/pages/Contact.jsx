import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import '../components/UI/contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header with animated elements */}
        <div className="contact-header">
          <div className="contact-icon">
            <span className="contact-icon-symbol">💬</span>
            <div className="pulse-ring"></div>
          </div>
          <h1 className="contact-title">Contact MovieFlix</h1>
          <p className="contact-subtitle">
            We're here to help with any questions about your membership,
            movie recommendations, or technical support. Reach out and we'll
            respond within 24 hours.
          </p>
        </div>

        {/* Two-column layout for form and info */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="form-column">
            <Form method="post" className="contact-form">
              {actionData?.message && (
                <div className={`form-message ${actionData.status}`}>
                  <span className="message-icon">
                    {actionData.status === 'success' ? '✅' : '⚠️'}
                  </span>
                  {actionData.message}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="label-icon">👤</span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-icon">📧</span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="label-icon">📝</span>
                  Subject
                </label>
                <div className="select-wrapper">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a subject</option>
                    <option value="Membership">Membership Inquiry</option>
                    <option value="Technical">Technical Support</option>
                    <option value="Content">Content Suggestion</option>
                    <option value="Billing">Billing Issue</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-icon">✏️</span>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="6"
                  placeholder="Tell us how we can help you today..."
                ></textarea>
                <div className="character-count">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending your message...
                  </>
                ) : (
                  <>
                    <span className="send-icon">🚀</span>
                    Send Message
                  </>
                )}
              </button>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="info-column">
            <div className="info-card premium">
              <div className="info-header">
                <div className="info-icon">⭐</div>
                <h3>Premium Support</h3>
              </div>
              <p>As a MovieFlix member, you get priority support with faster response times.</p>
            </div>

            <div className="contact-methods">
              <h4>Other Ways to Reach Us</h4>

              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h5>Email</h5>
                  <p>support@movieflix.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🕒</div>
                <div className="method-details">
                  <h5>Response Time</h5>
                  <p>Within 24 hours</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🌎</div>
                <div className="method-details">
                  <h5>Global Support</h5>
                  <p>24/7 availability</p>
                </div>
              </div>
            </div>

            <div className="faq-preview">
              <h4>Common Questions</h4>
              <ul>
                <li>How do I change my subscription plan?</li>
                <li>Why is a video not playing?</li>
                <li>How do I create a watchlist?</li>
              </ul>
              <a href="/faq" className="faq-link">View all FAQs →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
