import { Outlet } from "react-router-dom"
import adHeader from "../admin/adHeader"
import adSidebar from "../admin/adSidebar"

const AdminLayout = () => {
  return (
    <>
        <adHeader/>
        <div>
            <adSidebar/>
            <div>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default AdminLayout