import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Send,
  Wallet,
  BarChart3,
  Settings,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import "../../styles/sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* HAMBURGER */}
      <button className="hamburger" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={closeSidebar} />}

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* BRAND */}
        <div className="sidebar-brand">

          <div className="logo">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 22V12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="brand-text">
            <h2>DE-_ORO-_SAM</h2>
          </div>

        </div>

        {/* USER PROFILE */}
        <div className="sidebar-profile">

          <div className="avatar">P</div>

          <div className="profile-info">
            <p className="name">Prevo OGB</p>
            <p className="email">prevo@email.com</p>
          </div>

        </div>

        {/* NAV */}
        <nav className="sidebar-nav">

          <NavLink to="/" className="nav-item" onClick={closeSidebar}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/send" className="nav-item" onClick={closeSidebar}>
            <Send size={18} /> Send Money
          </NavLink>

          <NavLink to="/wallet" className="nav-item" onClick={closeSidebar}>
            <Wallet size={18} /> Wallet
          </NavLink>

          <NavLink to="/analytics" className="nav-item" onClick={closeSidebar}>
            <BarChart3 size={18} /> Analytics
          </NavLink>

          <NavLink to="/settings" className="nav-item" onClick={closeSidebar}>
            <Settings size={18} /> Settings
          </NavLink>

        </nav>

        {/* FOOTER */}
        <div className="sidebar-footer">

          <p>Secure • Fast • Modern</p>

          <div className="theme-toggle">
            <span>Dark Mode</span>

            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>

        </div>

      </div>
    </>
  );
};

export default Sidebar;