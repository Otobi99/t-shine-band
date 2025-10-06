import React from 'react';

function Shows() {
  const upcomingShows = [
    {
      id: 1,
      date: "2024-12-15",
      venue: "Tokyo Dome City Hall",
      location: "Tokyo, Japan",
      type: "Big Show",
      status: "Sold Out"
    },
    {
      id: 2,
      date: "2024-12-20",
      venue: "Neon Bar & Lounge",
      location: "Shibuya, Tokyo",
      type: "Bar Event",
      status: "Limited Tickets"
    },
    {
      id: 3,
      date: "2024-12-25",
      venue: "Shinjuku Live House",
      location: "Shinjuku, Tokyo",
      type: "Club Event",
      status: "Available"
    },
    {
      id: 4,
      date: "2024-12-31",
      venue: "New Year's Eve Festival",
      location: "Odaiba, Tokyo",
      type: "Festival",
      status: "Early Bird"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Sold Out': return '#ff4444';
      case 'Limited Tickets': return '#ffaa00';
      case 'Available': return '#00ff88';
      case 'Early Bird': return '#004aad';
      default: return '#ccc';
    }
  };

  return (
    <section id="shows" style={{background: 'rgba(0, 0, 0, 0.9)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 className="section-title">UPCOMING SHOWS</h2>
        
        <div style={{marginBottom: '3rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.2rem', color: '#ccc'}}>
            Experience the energy live! From intimate bars to massive festivals.
          </p>
        </div>

        <div className="grid-container">
          {upcomingShows.map((show) => (
            <div key={show.id} className="card">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div>
                  <h3 style={{color: 'white', marginBottom: '0.5rem'}}>{show.venue}</h3>
                  <p style={{color: '#00ff88', fontSize: '0.9rem'}}>{show.location}</p>
                </div>
                <span style={{
                  background: getStatusColor(show.status),
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {show.status}
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(0, 74, 173, 0.2)',
                borderRadius: '10px'
              }}>
                <div>
                  <div style={{color: '#00ff88', fontWeight: 'bold', fontSize: '1.1rem'}}>
                    {new Date(show.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div style={{color: '#ccc', fontSize: '0.9rem'}}>
                    {new Date(show.date).getFullYear()}
                  </div>
                </div>
                <div style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(0, 255, 136, 0.2)',
                  borderRadius: '20px',
                  border: '1px solid #00ff88',
                  color: '#00ff88',
                  fontSize: '0.8rem'
                }}>
                  {show.type}
                </div>
              </div>
              
              <button className="btn" style={{width: '100%', textAlign: 'center'}}>
                {show.status === 'Sold Out' ? 'Join Waitlist' : 'Get Tickets'}
              </button>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.3), rgba(0, 255, 136, 0.3))',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid #004aad'
        }}>
          <h3 style={{color: '#00ff88', marginBottom: '1rem', fontSize: '2rem'}}>
            🎪 BOOK FOR YOUR EVENT
          </h3>
          <p style={{color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem'}}>
            Ready to bring Tokyo Beats to your venue? We perform at bars, clubs, 
            corporate events, and major festivals worldwide.
          </p>
          <button className="btn" style={{
            background: 'linear-gradient(45deg, #00ff88, #004aad)',
            fontSize: '1.1rem',
            padding: '15px 40px'
          }}>
            Contact for Booking
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shows;