import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

const PublicLayout = () => {
  return (
    <div>
        <Header/>
        <main className="relative bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3f51b5] text-white min-h-screen overflow-hidden">
          {/* Lớp phủ toàn bộ section */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1e3a8a]/50 to-black/70 z-0"></div>
                <Outlet/>
        <Footer/>
        </main>
    </div>
  )
}

export default PublicLayout