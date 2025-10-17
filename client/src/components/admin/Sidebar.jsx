import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logo from '../common/Logo';

const Sidebar = ({ isOpen, onClose }) => {
  const [themeOpen, setThemeOpen] = useState(false);

  const linkClass =
    'block px-4 py-2 rounded transition duration-300 hover:bg-white/20 text-white';
  const activeClass =
    'bg-white/30 font-semibold shadow-md';

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white/10 backdrop-blur-md shadow-md z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:h-auto`}
    >
      <nav className="h-full p-6 space-y-6">
        {/* Logo */}
        <div className="mb-4">
          <Logo />
        </div>

        {/* Navigation */}
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/library"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Quản lý thư viện
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Quản lý thành viên
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Contact Form
            </NavLink>
          </li>

          {/* Dropdown Theme */}
          <li>
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              className="w-full flex items-center justify-between px-4 py-2 rounded hover:bg-white/20 transition duration-300 font-semibold text-white"
            >
              <span>Theme</span>
              {themeOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {themeOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <NavLink
                    to="/admin/theme/home"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeClass : ''}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/theme/about"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeClass : ''}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/theme/library"
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeClass : ''}`
                    }
                  >
                    Thư viện
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Đăng xuất */}
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ''}`
              }
            >
              Đăng xuất
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Nút đóng sidebar trên mobile */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl md:hidden"
        aria-label="Đóng sidebar"
      >
        ✕
      </button>
    </div>
  );
};

export default Sidebar;
