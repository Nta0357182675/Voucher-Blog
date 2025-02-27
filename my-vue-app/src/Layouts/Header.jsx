import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import '../stylesCss/Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-left">
        <h2>Vouchers Blog</h2>
      </div>

      {/* Chỉ hiển thị Avatar bên phải */}
      <div className="header-right">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </header>
  );
};

export default Header;