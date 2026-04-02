

export default function Header() {
  return (
    <header>
      <div className="top-nav">
        <div className="container !flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="top-nav-left w-full md:w-auto flex items-center justify-start gap-4">
            <img src="/img/f7916101-f0ae-4c56-b26e-1111a3f02f10" alt="Logo" className="logo-main" />
            <h1 className="site-title !m-0">HỖ TRỢ PHÁP LÝ CHO DOANH NGHIỆP</h1>
          </div>

          <div className="top-nav-right w-full md:w-auto flex items-center justify-end gap-5">
            <div className="search-container hidden md:flex">
              <input type="text" placeholder="Tìm kiếm" className="search-input" />
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0280cd" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div className="login-section">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0280cd"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <a href="#">Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-menu">
        <div className="container">
          <ul className="menu-list hidden md:flex">
            <li className="menu-item home-box">
              <svg xmlns="http://www.w3.org/2000/svg" className="home-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </li>
            <li className="menu-item">TIN TỨC - SỰ KIỆN</li>
            <li className="menu-item">VĂN BẢN PHÁP LUẬT</li>
            <li className="menu-item">CHƯƠNG TRÌNH - KẾ HOẠCH</li>
            <li className="menu-item">TƯ VẤN VIÊN PHÁP LÝ</li>
            <li className="menu-item">THỦ TỤC HÀNH CHÍNH</li>
            <li className="menu-item">NGHIÊN CỨU TRAO ĐỔI</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}