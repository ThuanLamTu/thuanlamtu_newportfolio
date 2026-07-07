export function renderHero() {
  return `
    <section class="hero-section" id="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="badge-welcome" id="heroBadge">
            <span class="pulse-dot"></span>
            <span>Sẵn sàng cho các cơ hội mới</span>
          </div>
          <h1 class="hero-title" id="heroTitle">
            <span class="text-gradient">THUAN LAM</span>
          </h1>
          <h2 class="hero-subtitle" id="heroSubtitle">Frontend Developer</h2>
          <p class="hero-description" id="heroDesc">
            Building Modern &amp; Responsive Web Applications
          </p>
          <div class="hero-btns" id="heroBtns">
            <a href="#contact" class="btn btn-primary" id="btnHeroContact">Liên Hệ Ngay</a>
            <a href="#projects" class="btn btn-outline" id="btnHeroProjects">Xem Dự Án</a>
            <a href="cv.html?print=true" class="btn btn-secondary" id="btnDownloadCV" target="_blank">⬇️ Tải CV (PDF)</a>
          </div>
          <div class="social-links" id="heroSocials">
            <a href="https://github.com/ThuanLamTu" target="_blank" aria-label="GitHub" class="social-link-item">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="http://facebook.com/letmedownslowly25/" target="_blank" aria-label="Facebook" class="social-link-item">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="hero-visual" id="heroVisual">
          <div class="avatar-card-wrap">
            <div class="avatar-glow-ring"></div>
            <div class="avatar-img-wrap">
              <img src="avatar.png" alt="Thuận Lâm Tự - Frontend Developer" class="avatar-photo" id="avatarPhoto" />
            </div>
            <div class="avatar-tag tag-1">⚛️ React</div>
            <div class="avatar-tag tag-2">🟢 Node.js</div>
            <div class="avatar-tag tag-3">🎨 UI/UX</div>
            <div class="avatar-tag tag-4">🍃 MongoDB</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
