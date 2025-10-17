import {Routes, Route} from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import AdminLayout from "./layouts/AdminLayout"
import Home from "./pages/public/Home"
import Dashboard from "./pages/admin/Dashboard"
import Login from "./pages/Login"
import NotFoundPage from './pages/NotFoundPage';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/public/Contact"
import About from "./pages/public/About"
import Library from "./pages/public/Library"

//   useEffect(() => {
//   const handleContextMenu = (e) => e.preventDefault();
//   const handleKeyDown = (e) => {
//     if (
//       (e.ctrlKey && e.key === "c") || // Ctrl+C
//       (e.ctrlKey && e.key === "u") || // Ctrl+U
//       (e.ctrlKey && e.key === "s") || // Ctrl+S
//       (e.ctrlKey && e.key === "p") || // Ctrl+P
//       (e.metaKey && e.key === "c")    // Cmd+C (Mac)
//     ) {
//       e.preventDefault();
//     }
//   };

//   document.addEventListener("contextmenu", handleContextMenu);
//   document.addEventListener("keydown", handleKeyDown);

//   return () => {
//     document.removeEventListener("contextmenu", handleContextMenu);
//     document.removeEventListener("keydown", handleKeyDown);
//   };
// }, []);

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Routes>
        <Route element={<PublicLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact"element={<Contact/>}/>
          <Route path="about"element={<About/>}/>
          <Route path="library"element={<Library/>}/>
          
        </Route>
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
        <Route path="auth/login" element ={<Login/>}/>
         <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App