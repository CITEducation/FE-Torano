import React, { useState } from "react";
import "../../styles/Home/header.css"; // import CSS
import { FaSearch, FaUser, FaShoppingBag, FaAngleDown, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom"

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
  }

  const register = () => {
    navigate("/register")
  }

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <span>
            Hotline mua hàng: <b>0964942121</b> (8:30-21:30, Tất cả các ngày trong tuần)
          </span>
        </div>
      </div>

      {/* HEADER MAIN */}
      <header className="header">

        <div className="container header-content">
          {/* Logo */}
          <div className="barIcon-reponsive" onClick={toggleMobileMenu}> <FaBars /></div>
          <div className="logo">
            <img src="https://theme.hstatic.net/200000690725/1001078549/14/logo.png?v=877" alt="Torano Logo" />
          </div>

          {/* Menu */}
          <nav className={`main-menu ${mobileOpen ? "open" : ""}`}>
            <a href="#">Sản phẩm mới</a>
            <a href="#">Danh mục sale</a>

            <div className="dropdown">
              <button className="dropbtn">
                Áo nam <FaAngleDown className="icon-down" />
              </button>
              <div className="dropdown-content">
                <a href="#">Áo sơ mi</a>
                <a href="#">Áo thun</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">
                Quần nam <FaAngleDown className="icon-down" />
              </button>
              <div className="dropdown-content">
                <a href="#">Quần jeans</a>
                <a href="#">Quần short</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">
                Bộ sưu tập <FaAngleDown className="icon-down" />
              </button>
              <div className="dropdown-content">
                <a href="#">New Arrival</a>
              </div>
            </div>

            <a href="#">Hệ thống cửa hàng</a>

            <div className="closeIcon-reponsive" onClick={toggleMobileMenu}>
              <  IoMdClose />
            </div>

          </nav>

          {/* Icons */}
          <div className="header-icons">
            <FaSearch />
            <span onClick={register}>
              <FaUser />
            </span>
            <div className="cart-icon">
              <FaShoppingBag />
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;