import {Routes,Route} from "react-router-dom"
import ClientLayout from "./layouts/ClientLayout"
import Home from "./pages/Home"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const App = () => {
  return (
    <Routes>
        <Route element={<ClientLayout/>}>
          <Route index element={<Home/>} />
        </Route>
    </Routes>
  )
}

export default App