import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Text, Float } from '@react-three/drei';
import { bandMembers } from './member.json';

// Individual Member 3D Components
function VocalMember({ position, color, isMainVocal = false }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      if (isMainVocal) {
        // Special animation for main vocal (Slug)
        meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
        meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
        meshRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      }
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 1, 8]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Vocal waves */}
      <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.6, 16]} />
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.5}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function GuitarMember({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        <mesh>
          <boxGeometry args={[0.8, 0.1, 0.3]} />
          <meshStandardMaterial 
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
          />
        </mesh>
        {/* Guitar neck */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.1, 0.6, 0.1]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>
    </Float>
  );
}

function BassMember({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.6) * 0.2;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[0.7, 0.15, 0.4]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Bass waves - lower frequency */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.2, 8, 6]} />
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
}

function DrumMember({ position, color, isLeader = false }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      if (isLeader) {
        meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
        meshRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
      }
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 16]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* Drum sticks */}
      <mesh position={[0.3, 0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function KeyboardMember({ position, color }) {
  const meshRef = useRef();
  const keysRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current && keysRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      keysRef.current.children.forEach((key, index) => {
        key.position.y = Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.05;
      });
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[1.2, 0.1, 0.4]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
      <group ref={keysRef}>
        {/* Keyboard keys */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[-0.5 + i * 0.15, 0.1, 0]}>
            <boxGeometry args={[0.1, 0.05, 0.2]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#ffffff" : "#000000"} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function BandFormation() {
  const positions = [
    [0, 0, -3],      // Slug - Main Vocal (center front)
    [2, 0, -2],      // Lena - Female Vocal
    [-2, 0, -2],     // Ryo - Guitar
    [-1, 0, -4],     // Kenji - Bass
    [0, 0, -5],      // Takumi - Drum Leader
    [1, 0, -4]       // Akira - Keyboard
  ];

  return (
    <group>
      {/* Slug - Main Vocal */}
      <VocalMember position={positions[0]} color="#ff0080" isMainVocal={true} />
      
      {/* Lena - Female Vocal */}
      <VocalMember position={positions[1]} color="#00ff88" />
      
      {/* Ryo - Guitar */}
      <GuitarMember position={positions[2]} color="#004aad" />
      
      {/* Kenji - Bass */}
      <BassMember position={positions[3]} color="#ffaa00" />
      
      {/* Takumi - Drum Leader */}
      <DrumMember position={positions[4]} color="#ff4444" isLeader={true} />
      
      {/* Akira - Keyboard */}
      <KeyboardMember position={positions[5]} color="#8844ff" />
      
      {/* Connection lines between members */}
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length}
            array={new Float32Array(positions.flat())}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#004aad" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function ThreeScene() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "https://www.youtube.com/embed/tkCEXZRYSDQ";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    return vid;
  });

  useEffect(() => {
    video.play();
  }, [video]);

  return (
    <div className="three-canvas">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        
        {/* Video Background */}
        <mesh position={[0, 0, -15]} rotation={[0, 0, 0]}>
          <planeGeometry args={[20, 12]} />
          <meshBasicMaterial>
            <videoTexture attach="map" args={[video]} />
          </meshBasicMaterial>
        </mesh>
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#004aad" />
        <pointLight position={[-10, 5, -5]} intensity={0.5} color="#ff0080" />
        <pointLight position={[0, -5, 5]} intensity={0.3} color="#00ff88" />
        
        {/* Effects */}
        <Stars radius={100} depth={50} count={2000} factor={4} />
        <Sparkles count={100} scale={10} size={1} speed={0.2} color="#004aad" />
        
        {/* Band Formation */}
        <BandFormation />
        
        {/* Tokyo Drift Style Text */}
        <Text
          position={[0, 3, -2]}
          color="#004aad"
          fontSize={0.5}
          font="/fonts/Network.woff" // You'll need to add this font
          anchorX="center"
          anchorY="middle"
        >
          TOKYO DRIFT BEATS
        </Text>
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#000000', 5, 25]} />
      </Canvas>
    </div>
  );
}

export default ThreeScene;