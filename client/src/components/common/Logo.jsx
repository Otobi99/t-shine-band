const Logo = ({ size = 'text-3xl' }) => {
  return (
    <div
      className={`font-network-and ${size} font-bold bg-gradient-to-r from-cyan-400 via-[#004aad] to-purple-500 bg-clip-text text-transparent animate-gradient-x
      logo-text
      `}
    >
      T Shine Band
    </div>
  );
};

export default Logo;
