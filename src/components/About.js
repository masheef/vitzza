import '../styles.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.body.classList.add('fade-in');
    return () => document.body.classList.remove('fade-in');
  }, []);

  const tabs = [
    { title: 'Our Mission', content: 'We are committed to delivering exceptional value and service to our customers worldwide.' },
    { title: 'Our Vision', content: 'To become the leading provider of innovative solutions that transform industries and lives.' },
    { title: 'Our Values', content: 'Integrity, excellence, innovation, and customer focus are at the heart of everything we do.' }
  ];

  return (
    <div className="About">
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand" to="/">✨ Vitzza</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero wave-distortion" style={{
        minHeight: '50vh',
        backgroundImage: "linear-gradient(rgba(8,10,20,0.45), rgba(8,10,20,0.45)), url('https://images.unsplash.com/photo-1508385082359-f9f2f3f8d0f7?w=1400&h=700&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        animation: 'waveDistortion 3s ease-in-out infinite'
      }}>
        <div className="container">
          <h1 className="text-thunder" style={{ animation: 'thunder 1.5s ease-in-out' }}>About Our Company</h1>
          <p className="lead" style={{ animation: 'fadeInUp 1s ease' }}>Building amazing experiences since 2020</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Who We Are</h2>
          <div className="row mt-5">
            <div className="col-md-6 slide-in-left">
              <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
                We are a team of passionate professionals dedicated to creating solutions that make a difference. 
                With over a decade of experience in the industry, we've helped thousands of clients achieve their goals.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginTop: '20px' }}>
                Our team brings together diverse expertise and perspectives to deliver innovative solutions tailored to your needs.
              </p>
            </div>
            <div className="col-md-6 slide-in-right">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Quick Facts</h5>
                  <ul style={{ lineHeight: '2.2' }}>
                    <li><strong>✓ Founded:</strong> 2020</li>
                    <li><strong>✓ Team Size:</strong> 50+ Professionals</li>
                    <li><strong>✓ Clients Served:</strong> 1000+</li>
                    <li><strong>✓ Countries:</strong> 25+</li>
                    <li><strong>✓ Awards:</strong> 15+ Industry Awards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center neon-glow">Our Story</h2>
          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="card h-100 card-fire" style={{ animation: 'fadeInUp 0.6s ease' }}>
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px', animation: 'pulse 2s ease-in-out infinite' }}>🎯</div>
                  <h5 className="card-title text-fire">Vision</h5>
                  <p className="card-text">To pioneer transformative solutions that drive positive change across industries and communities globally.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 card-lightning" style={{ animation: 'fadeInUp 0.8s ease' }}>
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px', animation: 'pulse 2s ease-in-out infinite' }}>💡</div>
                  <h5 className="card-title text-lightning">Innovation</h5>
                  <p className="card-text">We continuously push boundaries through research, technology, and creative thinking to solve tomorrow's challenges.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 card-glitch" style={{ animation: 'fadeInUp 1s ease' }}>
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px', animation: 'pulse 2s ease-in-out infinite' }}>🤝</div>
                  <h5 className="card-title" style={{ color: '#667eea' }}>Partnership</h5>
                  <p className="card-text">We believe in building lasting relationships with our clients, partners, and team members based on trust and mutual success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Our Focus Areas</h2>
          <div className="row g-4 mt-5">
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 zoom-in">
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔧</div>
                  <h6 className="card-title">Technology</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 zoom-in">
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📱</div>
                  <h6 className="card-title">Digital</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 zoom-in">
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌟</div>
                  <h6 className="card-title">Excellence</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 zoom-in">
                <div className="card-body text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚀</div>
                  <h6 className="card-title">Growth</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Core Values</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-group w-100 mb-4" role="group">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn ${activeTab === index ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab(index)}
                    style={{ flex: 1 }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="card fade-in">
                <div className="card-body p-5 text-center">
                  <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                    {tabs[activeTab].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container">
          <h2 className="section-title">Ready to Work With Us?</h2>
          <p className="lead mt-4">Get in touch and let's create something amazing together</p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-4">Contact Us Today</Link>
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

export default About;
