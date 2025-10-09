import { useEffect, useState } from 'react';

const slides = [
  {
    image: 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
    text: 'Chúng tôi là T Shine Band — nơi âm nhạc thăng hoa!',
  },
  {
    image: 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973554/hero-image-3_t3fmmm.jpg',
    text: 'Mỗi giai điệu là một câu chuyện, mỗi sân khấu là một cuộc sống!',
  },
  {
    image: 'https://res.cloudinary.com/dttqah17o/image/upload/v1759973502/hero-image-4_jjkm8x.jpg',
    text: 'Chúng tôi không chỉ chơi nhạc — chúng tôi sống cùng nó!',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = slides[currentSlide].text;
    setDisplayedText('');
    setCharIndex(0);

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = fullText.charAt(prev.length);
        return prev + nextChar;
      });

      setCharIndex((prev) => {
        if (prev >= fullText.length - 1) {
          clearInterval(typingInterval);
        }
        return prev + 1;
      });
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(slideTimer);
    };
  }, [currentSlide]);

  return (
    <section className="hero relative h-screen overflow-hidden">
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-bg absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient z-10" />

      {/* Typing text */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center max-w-3xl leading-snug typing-text">
          {displayedText}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
