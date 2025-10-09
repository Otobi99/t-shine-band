import {Routes,Route} from "react-router-dom"
import ClientLayout from "./layouts/ClientLayout"
import Home from "./pages/Home"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Member from "./pages/Member";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MemberDetail from "./pages/MemberDetail";

const App = () => {
  return (
    <Routes>
        <Route element={<ClientLayout/>}>
          <Route index element={<Home/>} />
          <Route path="members" element={<Member/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="dt" element={<MemberDetail/>} />
        </Route>
    </Routes>
  )
}

export default App