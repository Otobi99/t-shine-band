import {Routes, Route} from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import AdminLayout from "./layouts/AdminLayout"
import Home from "./pages/public/Home"
import Dashboard from "./pages/admin/Dashboard"
import Login from "./pages/Login"
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
        <Route element={<PublicLayout/>}>
          <Route index element={<Home/>}/>
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