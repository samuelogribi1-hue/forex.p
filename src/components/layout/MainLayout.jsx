import Sidebar from "./Sidebar";
import "../../styles/layout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;