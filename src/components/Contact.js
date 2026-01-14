import '../styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactSubject: '',
    contactMessage: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showExtras, setShowExtras] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.contactName.trim()) newErrors.contactName = 'Name is required';
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Email is invalid';
    }
    if (!formData.contactMessage.trim()) {
      newErrors.contactMessage = 'Message is required';
    } else if (formData.contactMessage.length > 500) {
      newErrors.contactMessage = 'Message cannot exceed 500 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        contactSubject: '',
        contactMessage: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">✨ Vitzza</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section glitch-effect text-center text-white d-flex align-items-center" style={{
        minHeight: '45vh',
        backgroundImage: "linear-gradient(rgba(8,10,20,0.45), rgba(8,10,20,0.45)), url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1400&h=700&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'glitch 0.8s ease-in-out'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold text-neon" style={{ animation: 'neonGlowPulse 2s ease-in-out infinite' }}>Get In Touch</h1>
          <p className="lead" style={{ animation: 'fadeInUp 1s ease' }}>We'd love to hear from you. Send us a message and we'll respond quickly!</p>
        </div>
      </section>

      {/* SUCCESS ALERT */}
      {submitted && (
        <div className="container mt-4">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            ✅ <strong>Success!</strong> Your message has been sent successfully.
            <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
          </div>
        </div>
      )}

      {/* CONTACT INFO */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Contact Information</h2>
          <div className="row g-4">
            <div className="col-md-4"><div className="info-card">📍<h5>Our Address</h5><p>123 Business Street<br/>New York, NY</p></div></div>
            <div className="col-md-4"><div className="info-card">📞<h5>Phone</h5><p>+1 (555) 123-4567<br/>Mon-Fri, 9AM-6PM</p></div></div>
            <div className="col-md-4"><div className="info-card">✉️<h5>Email</h5><p><a href="mailto:hello@yoursite.com">hello@yoursite.com</a></p></div></div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Send us a Message</h2>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <form className="card p-4 shadow" onSubmit={handleSubmit} noValidate>
                
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="contactName" value={formData.contactName} onChange={handleChange}
                    className={`form-control ${errors.contactName ? 'is-invalid' : ''}`} />
                  {errors.contactName && <div className="invalid-feedback">{errors.contactName}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange}
                    className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`} />
                  {errors.contactEmail && <div className="invalid-feedback">{errors.contactEmail}</div>}
                </div>

                {/* Toggle Extras */}
                <button type="button" className="btn btn-link mb-3" onClick={() => setShowExtras(!showExtras)}>
                  {showExtras ? 'Hide optional fields' : 'Show optional fields'}
                </button>

                {showExtras && (
                  <>
                    <div className="mb-3">
                      <label className="form-label">Phone (Optional)</label>
                      <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject (Optional)</label>
                      <input type="text" name="contactSubject" value={formData.contactSubject} onChange={handleChange} className="form-control" />
                    </div>
                  </>
                )}

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label">Message *</label>
                  <textarea name="contactMessage" value={formData.contactMessage} onChange={handleChange}
                    className={`form-control ${errors.contactMessage ? 'is-invalid' : ''}`} rows="5"></textarea>
                  {errors.contactMessage && <div className="invalid-feedback">{errors.contactMessage}</div>}
                  <small className="text-muted">{formData.contactMessage.length}/500 characters</small>
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-100 btn-lightning" style={{
                  background: 'linear-gradient(90deg, #00d4ff, #0099ff)',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0, 153, 255, 0.4)',
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  animation: 'lightningBolt 0.8s ease-in-out infinite',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(0, 153, 255, 0.6)';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 153, 255, 0.4)';
                  e.target.style.transform = 'scale(1)';
                }}>⚡ Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-5 text-center">
        <h2 className="mb-4">Follow Us</h2>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://facebook.com" className="social-btn">f</a>
          <a href="https://twitter.com" className="social-btn">🐦</a>
          <a href="https://instagram.com" className="social-btn">📸</a>
          <a href="https://linkedin.com" className="social-btn">in</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-3 bg-dark text-white">
        <p>&copy; 2025 Vitzza. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
