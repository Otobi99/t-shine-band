import Logo from "@/assets/t-shine-logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-0 flex justify-center md:justify-between items-center">
        <div className="md:w-30 md:h-30 flex justify-center items-center"> 
          <img src={Logo} alt="T Shine Band" className="w-30 h-30 md:w-full md:h-full"/>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className="font-bold text-xl text-blue-800 navbar">
            Trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header