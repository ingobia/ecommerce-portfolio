import { Link } from 'react-router-dom'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="page-subtitle">Let's work together on your e-commerce data challenges</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-main">
              <div className="contact-intro">
                <h2>Available for Remote Opportunities</h2>
                <p>
                  I'm actively seeking remote opportunities to apply my e-commerce expertise. Whether you need help with:
                </p>
                <ul className="opportunity-list">
                  <li>Sales analysis and reporting</li>
                  <li>Pricing strategy and optimization</li>
                  <li>Inventory management and planning</li>
                  <li>Product performance analysis</li>
                  <li>Demand forecasting</li>
                  <li>Data-driven decision support</li>
                </ul>
                <p>
                  Let's discuss how I can support your e-commerce goals.
                </p>
              </div>
            </div>

            <div className="contact-sidebar">
              <div className="contact-info-card card">
                <h3>Contact Information</h3>
                
                <div className="contact-method">
                  <span className="method-icon">✉</span>
                  <div>
                    <p className="method-label">Email</p>
                    <p className="placeholder">Add your email address</p>
                  </div>
                </div>

                <div className="contact-method">
                  <span className="method-icon">in</span>
                  <div>
                    <p className="method-label">LinkedIn</p>
                    <p className="placeholder">Add your LinkedIn profile URL</p>
                  </div>
                </div>

                <div className="contact-method">
                  <span className="method-icon">💬</span>
                  <div>
                    <p className="method-label">WhatsApp</p>
                    <p className="placeholder">Add your WhatsApp number</p>
                  </div>
                </div>

                <div className="contact-method">
                  <span className="method-icon">🌐</span>
                  <div>
                    <p className="method-label">Website</p>
                    <p className="placeholder">Add your website or portfolio</p>
                  </div>
                </div>
              </div>

              <div className="contact-note card">
                <p>
                  <strong>Note:</strong> Contact information is displayed as placeholders. Update these values in the Contact page component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
