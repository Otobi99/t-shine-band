import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', eventType: '', message: '' });
  };

  return (
    <section id="contact" style={{background: 'rgba(0, 0, 0, 0.9)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 className="section-title">GET IN TOUCH</h2>
        
        <div className="grid-container">
          <div className="card">
            <h3 style={{color: '#00ff88', marginBottom: '2rem', textAlign: 'center'}}>
              📞 CONTACT INFO
            </h3>
            
            <div style={{marginBottom: '2rem'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(0, 74, 173, 0.2)',
                borderRadius: '10px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#004aad',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  📧
                </div>
                <div>
                  <div style={{color: '#ccc', fontSize: '0.9rem'}}>Email</div>
                  <div style={{color: 'white'}}>booking@tokyobeats.com</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(0, 74, 173, 0.2)',
                borderRadius: '10px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#00ff88',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  📱
                </div>
                <div>
                  <div style={{color: '#ccc', fontSize: '0.9rem'}}>Phone</div>
                  <div style={{color: 'white'}}>+81 3-1234-5678</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                background: 'rgba(0, 74, 173, 0.2)',
                borderRadius: '10px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#ff0080',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  📍
                </div>
                <div>
                  <div style={{color: '#ccc', fontSize: '0.9rem'}}>Location</div>
                  <div style={{color: 'white'}}>Tokyo, Japan</div>
                </div>
              </div>
            </div>
            
            <div style={{textAlign: 'center'}}>
              <h4 style={{color: '#00ff88', marginBottom: '1rem'}}>FOLLOW US</h4>
              <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#1877F2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  fb
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#1DA1F2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  𝕏
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#E4405F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  ig
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#FF0000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  ▶️
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{color: '#00ff88', marginBottom: '2rem', textAlign: 'center'}}>
              🎤 BOOKING REQUEST
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: '1rem'}}>
                <label style={{
                  display: 'block',
                  color: '#ccc',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #004aad',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <label style={{
                  display: 'block',
                  color: '#ccc',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #004aad',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <label style={{
                  display: 'block',
                  color: '#ccc',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #004aad',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select Event Type</option>
                  <option value="bar">Bar/Lounge Event</option>
                  <option value="club">Club Night</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="festival">Music Festival</option>
                  <option value="private">Private Party</option>
                  <option value="wedding">Wedding</option>
                </select>
              </div>
              
              <div style={{marginBottom: '2rem'}}>
                <label style={{
                  display: 'block',
                  color: '#ccc',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #004aad',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn"
                style={{width: '100%', textAlign: 'center'}}
              >
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
        
        <footer style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          borderTop: '1px solid #004aad'
        }}>
          <p style={{color: '#ccc', marginBottom: '1rem'}}>
            © 2024 TOKYO BEATS. All rights reserved. 
          </p>
          <p style={{color: '#004aad', fontSize: '0.9rem'}}>
            Rock • Pop • Funky • Tokyo Style
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;