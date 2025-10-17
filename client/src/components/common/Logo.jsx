import { Link } from "react-router-dom";
const Logo = ({ size = 'text-3xl' }) => {
  return (
    <Link to="/"
      className={`font-network-and ${size} font-bold bg-gradient-to-r from-cyan-400 via-[#004aad] to-purple-500 bg-clip-text text-transparent animate-gradient-x
      logo-text
      `}
    >
      T Shine Band
    </Link >
  );
};

export default Logo;
