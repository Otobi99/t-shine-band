import React, { useState } from 'react';

function Music() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Neon Dreams",
      genre: "Rock/Pop Fusion",
      duration: "3:45",
      plays: "50K"
    },
    {
      id: 2,
      title: "Tokyo Gravity",
      genre: "Funky Rock",
      duration: "4:20",
      plays: "45K"
    },
    {
      id: 3,
      title: "Street Lights",
      genre: "Pop Anthem",
      duration: "3:30",
      plays: "38K"
    },
    {
      id: 4,
      title: "Midnight Run",
      genre: "Electronic Rock",
      duration: "3:55",
      plays: "42K"
    }
  ];

  return (
    <section id="music" className="gradient-bg">
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 className="section-title">OUR MUSIC</h2>
        
        <div className="grid-container">
          {tracks.map((track) => (
            <div 
              key={track.id} 
              className={`card ${activeTrack === track.id ? 'active' : ''}`}
              onClick={() => setActiveTrack(track.id)}
              style={{
                cursor: 'pointer',
                border: activeTrack === track.id ? '2px solid #00ff88' : '1px solid #004aad'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(45deg, #004aad, #00ff88)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}>
                ▶️
              </div>
              
              <h3 style={{marginBottom: '0.5rem', color: 'white'}}>{track.title}</h3>
              <p style={{color: '#00ff88', marginBottom: '0.5rem'}}>{track.genre}</p>
              <p style={{color: '#ccc', fontSize: '0.9rem'}}>Duration: {track.duration}</p>
              <p style={{color: '#004aad', fontSize: '0.9rem'}}>Plays: {track.plays}</p>
              
              {activeTrack === track.id && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'rgba(0, 74, 173, 0.2)',
                  borderRadius: '10px',
                  border: '1px solid #004aad'
                }}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: '#00ff88',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 1s infinite'
                    }}>
                      ❚❚
                    </div>
                    <div>
                      <p style={{color: '#00ff88', fontWeight: 'bold'}}>Now Playing</p>
                      <p style={{color: 'white', fontSize: '0.9rem'}}>{track.title}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '4rem'}}>
          <h3 style={{color: '#00ff88', marginBottom: '2rem'}}>STREAM OUR MUSIC</h3>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
            <button className="btn" style={{background: '#1DB954'}}>Spotify</button>
            <button className="btn" style={{background: '#FF0000'}}>YouTube</button>
            <button className="btn" style={{background: '#FD1C6B'}}>SoundCloud</button>
            <button className="btn" style={{background: '#FF6B00'}}>Apple Music</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Music;