import { Outlet } from "react-router";
import '../stylesCss/Layout.css';
import Header from "./Header";
import Sidebar from "./Slidebar";
const Layout = () => {
  return (
    <div className="layout">
      {/* Header cố định trên cùng */}
      <Header />

      {/* Main container gồm Sidebar và Content */}
      <div className="main-container">
        {/* Sidebar bên trái cố định */}
        <Sidebar />

        {/* Nội dung chính sẽ thay đổi theo Route */}
        <main className="content">
          <Outlet />  {/* Outlet sẽ chứa các trang như Home, Customers, Vouchers */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
