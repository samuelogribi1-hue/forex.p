import Sidebar from "./Sidebar";
import "../../styles/outlay.css"

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