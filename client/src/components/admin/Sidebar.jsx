import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="h-full p-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-700">Quản trị</h2>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? 'bg-blue-200 font-semibold' : ''
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? 'bg-blue-200 font-semibold' : ''
              }`
            }
          >
            Người dùng
          </NavLink>
        </li>
        {/* Thêm các mục khác nếu cần */}
      </ul>
    </nav>
  );
};

export default Sidebar;
