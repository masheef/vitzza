import '../styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Booking() {
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 1, name: "Web Design", price: "$500", icon: "🎨", duration: "2 hours" },
    { id: 2, name: "Web Development", price: "$1200", icon: "💻", duration: "4 hours" },
    { id: 3, name: "Consultation", price: "$150", icon: "💬", duration: "1 hour" },
    { id: 4, name: "Mobile App Dev", price: "$2000", icon: "📱", duration: "6 hours" },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!bookingData.service) newErrors.service = "Select a service";
    if (!bookingData.date) newErrors.date = "Date required";
    if (!bookingData.time) newErrors.time = "Time required";
    if (!bookingData.name.trim()) newErrors.name = "Name required";
    if (!bookingData.email.trim()) newErrors.email = "Email required";
    if (!/\S+@\S+\.\S+/.test(bookingData.email)) newErrors.email = "Invalid email";
    if (!bookingData.phone.trim()) newErrors.phone = "Phone required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      setBookingData({
        service: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="Booking">

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
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* SUCCESS POPUP */}
      {submitted && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <div style={{ fontSize: "80px" }}>✅</div>
            <h2>Thank You for Booking!</h2>
            <p>Your booking has been confirmed successfully.</p>
            <button onClick={() => setSubmitted(false)} style={closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* BOOKING FORM */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card p-4 shadow">
            <form onSubmit={handleSubmit}>

              <h4>Select Service</h4>
              <div className="row">
                {services.map((svc) => (
                  <div className="col-md-6 mb-3" key={svc.id}>
                    <div
                      className="border p-3 rounded"
                      style={{
                        cursor: "pointer",
                        borderColor:
                          bookingData.service === svc.name ? "#ff6b35" : "#ddd",
                      }}
                      onClick={() =>
                        setBookingData({ ...bookingData, service: svc.name })
                      }
                    >
                      <h5>{svc.icon} {svc.name}</h5>
                      <p>{svc.price} | {svc.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              {errors.service && <small className="text-danger">{errors.service}</small>}

              <hr />

              <div className="row">
                <div className="col-md-6">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={bookingData.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.date && <small className="text-danger">{errors.date}</small>}
                </div>

                <div className="col-md-6">
                  <label>Time</label>
                  <select
                    name="time"
                    value={bookingData.time}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && <small className="text-danger">{errors.time}</small>}
                </div>
              </div>

              <hr />
                    
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-2"
                value={bookingData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-2"
                value={bookingData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
                    
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-control mb-3"
                value={bookingData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}

              <button className="btn btn-warning w-100 fw-bold">
                🔥 Confirm Booking
              </button>

            </form>
          </div>
        </div> 
      </section>
    </div>
  );
}

/* POPUP STYLES */
const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const popupStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "15px",
  textAlign: "center",
  maxWidth: "400px",
};

const closeBtn = {
  marginTop: "20px",
  padding: "10px 30px",
  border: "none",
  borderRadius: "30px",
  background: "#667eea",
  color: "#fff",
  cursor: "pointer",
};

export default Booking;
