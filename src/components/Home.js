import '../styles.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// ✅ Import local images
import responsiveDesign from '../components/images/responive desings.jpg';
import fullStackImg from '../components/images/full stack .jpg';
import mobileAppImg from '../components/images/mobile app.jpg';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="Home">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">✨ Vitzza</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="hero glitch-effect" style={{
        minHeight: '60vh',
        backgroundImage: 'linear-gradient(rgba(10,10,20,0.45), rgba(10,10,20,0.45)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=700&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container text-white">
          <h1 className={isLoaded ? 'slide-in-left text-neon' : ''} style={{ color: '#00d4ff', textShadow: '0 0 15px #00d4ff' }}>Welcome to Vitzza</h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.95)', animation: 'fadeInUp 1s ease-in' }}>Discover something amazing today</p>
          <div className="mt-5">
            <Link to="/booking" className="btn btn-primary btn-lg me-3 btn-fire">
              📅 Book Now
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg btn-lightning">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
                <h5 className="card-title">Fast & Reliable</h5>
                <p className="card-text">Lightning-fast performance and 99.9% uptime guarantee.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛡️</div>
                <h5 className="card-title">Secure & Safe</h5>
                <p className="card-text">Enterprise-grade security and regular backups.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center">
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
                <h5 className="card-title">Easy to Use</h5>
                <p className="card-text">Intuitive interface designed for everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5 text-thunder" style={{ animation: 'thunder 1.5s ease-in-out' }}>Our Latest Projects</h2>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6 zoom-in">
              <div className="portfolio-card card-fire">
                <img src={responsiveDesign} alt="Modern Web Design"
                  style={{ borderRadius: '10px', height: '200px', width: '100%', objectFit: 'cover', marginBottom: '15px', boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)' }} />
                <h5 style={{ color: '#ff6b35', fontWeight: '700' }}>🔥 Modern Web Design</h5>
                <p style={{ color: '#555' }}>Beautiful and responsive design that works on all devices.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 zoom-in">
              <div className="portfolio-card card-lightning">
                <img src={fullStackImg} alt="Full Stack Development"
                  style={{ borderRadius: '10px', height: '200px', width: '100%', objectFit: 'cover', marginBottom: '15px', boxShadow: '0 6px 20px rgba(0, 153, 255, 0.4)' }} />
                <h5 style={{ color: '#0099ff', fontWeight: '700' }}>⚡ Full Stack Development</h5>
                <p style={{ color: '#555' }}>Powerful backend with seamless frontend integration.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 zoom-in">
              <div className="portfolio-card card-glitch">
                <img src={mobileAppImg} alt="Mobile Apps"
                  style={{ borderRadius: '10px', height: '200px', width: '100%', objectFit: 'cover', marginBottom: '15px', boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)' }} />
                <h5 style={{ color: '#667eea', fontWeight: '700' }}>📱 Mobile Apps</h5>
                <p style={{ color: '#555' }}>Native and cross-platform mobile applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5 neon-glow">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="service-item card-fire" style={{
                padding: '25px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(247, 147, 30, 0.05))',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '15px',
                animation: 'fadeInUp 0.8s ease'
              }}>
                <div style={{ fontSize: '2.5rem' }}>🎨</div>
                <div>
                  <h5 style={{ color: '#ff6b35', fontWeight: '700' }}>Web Design</h5>
                  <p style={{ color: '#555', marginBottom: 0 }}>Custom design tailored to your brand identity.</p>
                  <small style={{ color: '#999' }}>Starting at $500</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item card-lightning" style={{
                padding: '25px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 153, 255, 0.05))',
                boxShadow: '0 4px 15px rgba(0, 153, 255, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '15px',
                animation: 'fadeInUp 1s ease'
              }}>
                <div style={{ fontSize: '2.5rem' }}>💻</div>
                <div>
                  <h5 style={{ color: '#0099ff', fontWeight: '700' }}>Web Development</h5>
                  <p style={{ color: '#555', marginBottom: 0 }}>Fast, scalable, and maintainable applications.</p>
                  <small style={{ color: '#999' }}>Starting at $1200</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item" style={{
                padding: '25px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '15px',
                animation: 'fadeInUp 1.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.1)';
              }}>
                <div style={{ fontSize: '2.5rem' }}>📱</div>
                <div>
                  <h5 style={{ color: '#667eea', fontWeight: '700' }}>Mobile Development</h5>
                  <p style={{ color: '#555', marginBottom: 0 }}>iOS and Android apps that engage users.</p>
                  <small style={{ color: '#999' }}>Starting at $2000</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item card-glitch" style={{
                padding: '25px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '15px',
                animation: 'fadeInUp 1.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.1)';
              }}>
                <div style={{ fontSize: '2.5rem' }}>💬</div>
                <div>
                  <h5 style={{ color: '#667eea', fontWeight: '700' }}>Consultation</h5>
                  <p style={{ color: '#555', marginBottom: 0 }}>Expert advice on your next big project.</p>
                  <small style={{ color: '#999' }}>$150/hour</small>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/booking" className="btn btn-primary btn-lg btn-fire">
              📅 Book a Service Today
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">What Our Clients Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card" style={{
                padding: '30px',
                borderRadius: '10px',
                background: '#fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#ffc107' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: '#555', fontStyle: 'italic', marginBottom: '15px' }}>"Amazing service! The team was professional and delivered exactly what I needed. Highly recommended!"</p>
                <div style={{ fontWeight: '700', color: '#1a1a2e' }}>Sarah Johnson</div>
                <small style={{ color: '#999' }}>CEO, Tech Startup</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card" style={{
                padding: '30px',
                borderRadius: '10px',
                background: '#fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#ffc107' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: '#555', fontStyle: 'italic', marginBottom: '15px' }}>"Outstanding results and exceptional customer support. I couldn't ask for better service!"</p>
                <div style={{ fontWeight: '700', color: '#1a1a2e' }}>Michael Chen</div>
                <small style={{ color: '#999' }}>Founder, Digital Agency</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card" style={{
                padding: '30px',
                borderRadius: '10px',
                background: '#fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#ffc107' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: '#555', fontStyle: 'italic', marginBottom: '15px' }}>"Great experience from start to finish. The quality is top-notch and communication was excellent."</p>
                <div style={{ fontWeight: '700', color: '#1a1a2e' }}>Emma Rodriguez</div>
                <small style={{ color: '#999' }}>Marketing Director</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title">Our Features</h2>
          <div className="row g-4 mt-4">
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📊</div>
                  <h6 className="card-title">Analytics</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔔</div>
                  <h6 className="card-title">Notifications</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌐</div>
                  <h6 className="card-title">Global Reach</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>💬</div>
                  <h6 className="card-title">24/7 Support</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 Vitzza. All rights reserved. | Designed with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
