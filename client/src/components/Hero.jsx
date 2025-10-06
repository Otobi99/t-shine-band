import React from 'react';

function Hero() {
  return (
    <section id="home" className="gradient-bg" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <style jsx>{`
        .hero-content {
          text-align: center;
          max-width: 800px;
          padding: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #004aad, #00ff88, #ff0080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 50px rgba(0, 74, 173, 0.5);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #ccc;
        }

        .hero-badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(0, 74, 173, 0.3);
          border: 1px solid #004aad;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="hero-content">
        <h1 className="hero-title">TOKYO BEATS</h1>
        <p className="hero-subtitle">
          Revolutionizing the music scene with explosive rock, pop, and funky vibes
        </p>
        
        <div className="hero-badges">
          <span className="badge">🎸 Rock</span>
          <span className="badge">🎵 Pop</span>
          <span className="badge">🎷 Funky</span>
          <span className="badge">🎤 Live Events</span>
          <span className="badge">🏙️ Tokyo Style</span>
        </div>
        
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="#music" className="btn">Listen Now</a>
          <a href="#shows" className="btn" style={{background: 'transparent', border: '2px solid #004aad'}}>
            Book a Show
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;