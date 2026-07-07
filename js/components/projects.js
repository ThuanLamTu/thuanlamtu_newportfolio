const GH_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
const EXT_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

export function renderProjects() {
  return `
    <section class="projects-section section" id="projects">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-subtitle">Sản Phẩm Thực Tế</span>
          <h2 class="section-title">Các Dự Án Tiêu Biểu</h2>
        </div>

        <!-- Filters -->
        <div class="projects-filter" id="projectFilters">
          <button class="filter-btn active" data-filter="all">Tất Cả</button>
          <button class="filter-btn" data-filter="frontend">Frontend</button>
          <button class="filter-btn" data-filter="backend">Backend / Fullstack</button>
        </div>

        <!-- Grid -->
        <div class="projects-grid" id="projectsGrid">

          <!-- Project 1: Travel Booking Platform -->
          <div class="project-card glass-card" data-category="backend">
            <div class="project-img-placeholder">
              <span class="project-icon">✈️</span>
            </div>
            <div class="project-info">
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">MongoDB</span>
                <span class="project-tag">JWT</span>
                <span class="project-tag">Cloudinary</span>
              </div>
              <h3>Travel Booking Platform</h3>
              <p>Nền tảng đặt lịch du lịch địa phương xây dựng với React + Node.js + MongoDB.</p>
              <ul class="project-highlights">
                <li>✓ JWT Authentication</li>
                <li>✓ RESTful API</li>
                <li>✓ Responsive UI</li>
                <li>✓ Admin Dashboard</li>
                <li>✓ Deployed on Vercel &amp; Render</li>
              </ul>
              <div class="project-links">
                <a href="https://github.com/ThuanLamTu/LocaTrip" target="_blank" class="project-link-btn">
                  ${GH_ICON} Xem GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2: Dara Beauty Center (Featured Client) -->
          <div class="project-card glass-card featured-project" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">💄</span>
            </div>
            <div class="project-info">
              <div class="project-badge">Featured Client Project</div>
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">Express</span>
                <span class="project-tag">MongoDB</span>
                <span class="project-tag">Vercel</span>
                <span class="project-tag">Render</span>
              </div>
              <h3>Dara Beauty Center</h3>
              <p class="project-role"><strong>Role:</strong> Full-Stack Developer</p>
              <ul class="project-highlights">
                <li>✓ Thiết kế website thẩm mỹ viện responsive hiện đại</li>
                <li>✓ Giao diện mobile-friendly, UX chuẩn</li>
                <li>✓ Tích hợp chức năng liên hệ &amp; đặt lịch</li>
                <li>✓ Tối ưu hiệu năng &amp; triển khai sản xuất</li>
                <li>✓ Hỗ trợ khách hàng sau khi ra mắt</li>
              </ul>
              <div class="project-links">
                <a href="https://darabeautycenter.vercel.app/" target="_blank" class="project-link-btn project-link-live">
                  ${EXT_ICON} Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3: Confidential Business Website -->
          <div class="project-card glass-card" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">🔒</span>
            </div>
            <div class="project-info">
              <div class="project-badge confidential">Confidential Client Project</div>
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">Express</span>
                <span class="project-tag">MongoDB</span>
              </div>
              <h3>Business Website (Private Project)</h3>
              <p>Dự án thương mại phát triển cho khách hàng. Mã nguồn và website không công khai theo thỏa thuận bảo mật.</p>
              <ul class="project-highlights">
                <li>✓ Thu thập yêu cầu từ khách hàng</li>
                <li>✓ Phát triển frontend responsive</li>
                <li>✓ Tích hợp Backend APIs</li>
                <li>✓ Deploy &amp; bảo trì website sản xuất</li>
              </ul>
              <div class="project-links">
                <span class="project-link-btn disabled">🔒 Source Code Confidential</span>
              </div>
            </div>
          </div>

          <!-- Project 4: Chicken Invader Game -->
          <div class="project-card glass-card" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">🐓</span>
            </div>
            <div class="project-info">
              <div class="project-tags">
                <span class="project-tag">C++</span>
                <span class="project-tag">OOP</span>
                <span class="project-tag">Game Dev</span>
              </div>
              <h3>Chicken Invader Game</h3>
              <p>Game bắn gà arcade cổ điển xây dựng bằng C++ áp dụng lập trình hướng đối tượng (OOP), Design Pattern và quản lý vòng đời game object.</p>
              <div class="project-links">
                <a href="https://github.com/ThuanLamTu/ChickenInvader" target="_blank" class="project-link-btn">
                  ${GH_ICON} Xem GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
