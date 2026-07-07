export function renderNavbar() {
  return `
    <header class="main-header" id="mainHeader">
      <div class="container header-container">
        <a href="#" class="logo" id="headerLogo">
          <img src="logo1.png" alt="ThuanLam.Dev Logo" class="logo-img" id="logoImg" />
        </a>
        <nav class="nav-menu" id="navMenu">
          <ul>
            <li><a href="#about" class="nav-link" id="navLinkAbout">Về Tôi</a></li>
            <li><a href="#skills" class="nav-link" id="navLinkSkills">Kỹ Năng</a></li>
            <li><a href="#projects" class="nav-link" id="navLinkProjects">Dự Án</a></li>
            <li><a href="#experience" class="nav-link" id="navLinkExp">Kinh Nghiệm</a></li>
            <li><a href="#contact" class="nav-link" id="navLinkContact">Liên Hệ</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="cv.html?print=true" class="btn btn-secondary btn-sm" id="btnHeaderCV" target="_blank">⬇️ Tải CV (PDF)</a>
          <button class="menu-toggle" id="menuToggle" aria-label="Toggle Menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}
