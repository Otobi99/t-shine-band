import React, { useState } from 'react';

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      type: "live",
      title: "Tokyo Dome Performance",
      description: "Sold-out show with 20,000 fans"
    },
    {
      id: 2,
      type: "studio",
      title: "Recording Session",
      description: "Creating our latest hit"
    },
    {
      id: 3,
      type: "backstage",
      title: "Backstage Moments",
      description: "Behind the scenes energy"
    },
    {
      id: 4,
      type: "crowd",
      title: "Fan Interaction",
      description: "Connecting with our audience"
    },
    {
      id: 5,
      type: "live",
      title: "Festival Stage",
      description: "Summer Sonic Festival"
    },
    {
      id: 6,
      type: "studio",
      title: "Music Video Shoot",
      description: "Neon-lit Tokyo streets"
    }
  ];

  const getImageColor = (type) => {
    switch(type) {
      case 'live': return '#ff0080';
      case 'studio': return '#00ff88';
      case 'backstage': return '#004aad';
      case 'crowd': return '#ffaa00';
      default: return '#004aad';
    }
  };

  return (
    <section id="gallery" className="gradient-bg">
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 className="section-title">GALLERY</h2>
        
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <p style={{fontSize: '1.2rem', color: '#ccc'}}>
            Capturing the energy, the moments, and the madness behind the music.
          </p>
        </div>

        <div className="grid-container">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="card"
              onClick={() => setActiveImage(image)}
              style={{
                cursor: 'pointer',
                minHeight: '300px',
                background: `linear-gradient(135deg, ${getImageColor(image.type)}20, #000000)`,
                border: `2px solid ${getImageColor(image.type)}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Placeholder for image */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '4rem',
                opacity: 0.3
              }}>
                📸
              </div>
              
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                padding: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  color: getImageColor(image.type),
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  {image.type}
                </div>
                <h3 style={{color: 'white', marginBottom: '0.5rem'}}>{image.title}</h3>
                <p style={{color: '#ccc', fontSize: '0.9rem'}}>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div style={{marginTop: '4rem'}}>
          <h3 style={{
            textAlign: 'center',
            color: '#00ff88',
            marginBottom: '2rem',
            fontSize: '2rem'
          }}>
            🎬 LIVE PERFORMANCE VIDEOS
          </h3>
          
          <div className="grid-container">
            <div className="card" style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #004aad, #ff0080)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1rem'
              }}>
                ▶️
              </div>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Tokyo Dome Live</h4>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>Full concert footage</p>
              <button className="btn" style={{background: '#FF0000'}}>
                Watch on YouTube
              </button>
            </div>
            
            <div className="card" style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #00ff88, #004aad)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1rem'
              }}>
                🎵
              </div>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Behind the Music</h4>
              <p style={{color: '#ccc', marginBottom: '1rem'}}>Studio documentary</p>
              <button className="btn">
                Watch Documentary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;