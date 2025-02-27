import { Link } from "react-router";
import '../stylesCss/Slidebar.css';
import { useLocation } from "react-router";
const Sidebar = () => {
  const location = useLocation()
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/app" className={location.pathname === `/app` ? `active` : `sidebar-item`}>
              <span className="sidebar-icon">🏠</span> Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/app/vouchers" className={location.pathname === `/app/vouchers` ? `active` : `sidebar-item`}>
              <span className="sidebar-icon">🎟️</span> Quản lý voucher
            </Link>
          </li>
          <li>
            <Link to="/app/campaigns" className={location.pathname === `/app/campaigns` ? `active` : `sidebar-item`}>
              <span className="sidebar-icon">📢</span> Quản lý chiến dịch
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
