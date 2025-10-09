import {Routes,Route} from "react-router-dom"
import ClientLayout from "./layouts/ClientLayout"
import Home from "./pages/Home"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Member from "./pages/Member";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Routes>
        <Route element={<ClientLayout/>}>
          <Route index element={<Home/>} />
          <Route path="members" element={<Member/>} />
          <Route path="gallery" element={<Gallery/>} />
        </Route>
    </Routes>
  )
}

export default App