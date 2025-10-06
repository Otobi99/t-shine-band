import React from 'react';

function About() {
  const bandMembers = [
    {
      name: "RYO",
      role: "Lead Vocalist",
      image: "/api/placeholder/200/200",
      description: "Powerful vocals with Tokyo edge"
    },
    {
      name: "KENJI",
      role: "Lead Guitar",
      image: "/api/placeholder/200/200",
      description: "Blazing solos that ignite the stage"
    },
    {
      name: "AKIRA",
      role: "Bass & Synth",
      image: "/api/placeholder/200/200",
      description: "Deep grooves and electronic vibes"
    },
    {
      name: "TAKUMI",
      role: "Drums & Beat",
      image: "/api/placeholder/200/200",
      description: "Rhythmic powerhouse"
    }
  ];

  return (
    <section id="about" style={{background: 'rgba(0, 0, 0, 0.8)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h2 className="section-title">THE BAND</h2>
        
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <p style={{fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 2rem'}}>
            Hailing from the neon-lit streets of Tokyo, we bring explosive energy 
            that blends rock intensity with pop sensibility and funky grooves. 
            Our sound is a gravitational force that pulls audiences into an 
            unforgettable musical experience.
          </p>
        </div>

        <div className="grid-container">
          {bandMembers.map((member, index) => (
            <div key={index} className="card" style={{textAlign: 'center'}}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: `linear-gradient(45deg, #004aad, #00ff88)`,
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                🎤
              </div>
              <h3 style={{color: '#00ff88', marginBottom: '0.5rem'}}>{member.name}</h3>
              <p style={{color: '#004aad', fontWeight: 'bold', marginBottom: '1rem'}}>{member.role}</p>
              <p style={{color: '#ccc'}}>{member.description}</p>
            </div>
          ))}
        </div>

        <div style={{marginTop: '4rem', textAlign: 'center'}}>
          <h3 style={{color: '#00ff88', marginBottom: '2rem', fontSize: '2rem'}}>
            🎵 OUR SOUND 🎵
          </h3>
          <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h4>High Energy</h4>
              <p>Explosive performances</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌃</div>
              <h4>Urban Vibe</h4>
              <p>Tokyo nightlife essence</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎭</div>
              <h4>Versatile</h4>
              <p>Rock, Pop, Funky fusion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;