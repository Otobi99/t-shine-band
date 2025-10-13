import { useEffect, useState } from "react";

const phrases = [
  "Chúng tôi là Acoustic Soul",
  "Âm nhạc là hơi thở",
  "Giai điệu chạm đến trái tim",
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(phrases[index].substring(0, subIndex));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className=" h-[80vh] text-center flex items-center justify-center px-4 
    relative  ">
     {/* Blob ánh sáng sân khấu */}
    <div className="blob blob-blue top-1/4 left-1/3 w-72 h-72"></div>
    <div className="blob blob-purple bottom-1/3 right-1/4 w-60 h-60"></div>
    <div className="blob blob-pink top-2/3 right-1/2 w-40 h-40"></div>
    <div className="blob blob-cyan top-1/2 left-1/4 w-56 h-56"></div>
    <div className="blob blob-yellow bottom-1/4 right-1/3 w-48 h-48"></div>


      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          {text}
          <span className="border-r-2 border-gray-900 animate-blink ml-1"></span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
          Band nhạc acoustic tại Tây Ninh – nơi âm nhạc kết nối cảm xúc.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}
