import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <style jsx>{`
       @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap');


        .header {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 1.2rem 2rem;
          background: ${isScrolled ? '#000000' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(15px)' : 'none'};
          border-bottom: ${isScrolled ? '1px solid #004aad' : 'none'};
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          font-family: 'Orbitron', sans-serif;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: white;
          line-height: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo-main {
          display: flex;
          align-items: baseline;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .logo-t {
          font-size: 2.8rem;
          font-weight: 900;
          background: linear-gradient(45deg, #004aad, #00cfff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(0, 74, 173, 0.5);
          font-family: 'Orbitron', sans-serif;
          line-height: 1;
        }

        .logo-dash {
          font-size: 2.2rem;
          font-weight: 300;
          color: #004aad;
          margin: 0 3px;
          font-family: 'Orbitron', sans-serif;
          line-height: 1;
        }

        .logo-shile {
          font-size: 2.2rem;
          font-weight: 700;
          color: #004aad;
          letter-spacing: 1px;
          text-transform: lowercase;
          font-family: 'Orbitron', sans-serif;
          line-height: 1;
        }

        .logo-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: #00ff88;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 3px;
          font-family: 'Courier New', monospace;
        }

        .logo-tagline {
          font-size: 0.75rem;
          font-weight: 400;
          color: #cccccc;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: 'Orbitron', sans-serif;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-family: 'Roboto', sans-serif;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          padding: 0.5rem 0;
        }

        .nav-links a:hover {
          color: #00ff88;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #004aad, #ff0080);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .header {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .logo-t {
            font-size: 2.2rem;
          }

          .logo-dash {
            font-size: 1.8rem;
          }

          .logo-shile {
            font-size: 1.8rem;
          }

          .logo-subtitle {
            font-size: 0.85rem;
            letter-spacing: 3px;
          }

          .logo-tagline {
            font-size: 0.65rem;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 480px) {
          .logo-t {
            font-size: 1.8rem;
          }

          .logo-dash {
            font-size: 1.5rem;
          }

          .logo-shile {
            font-size: 1.5rem;
          }

          .logo-subtitle {
            font-size: 0.75rem;
            letter-spacing: 2px;
          }

          .logo-tagline {
            font-size: 0.6rem;
          }
        }

        .header.scrolled .logo-t {
          font-size: 2.2rem;
        }

        .header.scrolled .logo-dash {
          font-size: 1.8rem;
        }

        .header.scrolled .logo-shile {
          font-size: 1.8rem;
        }

        .header.scrolled .logo-subtitle {
          font-size: 0.85rem;
        }

        .header.scrolled .logo-tagline {
          font-size: 0.65rem;
        }
      `}</style>

      <nav className="nav">
        <div className="logo">
          <div className="logo-main">
            <span className="logo-t">Net</span>
            <span className="logo-dash">-</span>
            <span className="logo-shile">workand</span>
          </div>
          <div className="logo-subtitle">SAND</div>
          <div className="logo-tagline">WHERE MY MIND IS FREEDOM</div>
        </div>

        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#members">MEMBERS</a></li>
          <li><a href="#music">MUSIC</a></li>
          <li><a href="#shows">SHOWS</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
