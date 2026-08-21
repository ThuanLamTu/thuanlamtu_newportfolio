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

          <!-- Project 1: Clean5S (Client Project) -->
          <div class="project-card glass-card featured-project" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">✨</span>
            </div>
            <div class="project-info">
              <div class="project-badge">Dự Án Khách Hàng Thực Tế</div>
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">JavaScript</span>
                <span class="project-tag">Responsive</span>
                <span class="project-tag">SEO</span>
                <span class="project-tag">Clean5S</span>
              </div>
              <h3>Clean5S - Website Dịch Vụ Vệ Sinh</h3>
              <p class="project-role"><strong>Role:</strong> Full-Stack Developer (Đã bàn giao sản xuất)</p>
              <ul class="project-highlights">
                <li>✓ Thiết kế và xây dựng website dịch vụ chuyên nghiệp</li>
                <li>✓ Giao diện chuẩn SEO, tối ưu tốc độ tải trang</li>
                <li>✓ Tương thích hoàn hảo trên Desktop &amp; Mobile</li>
                <li>✓ Đã bàn giao và vận hành chính thức cho khách hàng</li>
              </ul>
              <div class="project-links">
                <a href="https://www.clean5s.com/" target="_blank" class="project-link-btn project-link-live">
                  ${EXT_ICON} Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2: Nexa Real-Time Chat App -->
          <div class="project-card glass-card" data-category="backend">
            <div class="project-img-placeholder">
              <span class="project-icon">💬</span>
            </div>
            <div class="project-info">
              <div class="project-badge" style="background: rgba(0, 242, 254, 0.15); color: #00f2fe; border: 1px solid rgba(0, 242, 254, 0.3);">Real-Time App</div>
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">Socket.io</span>
                <span class="project-tag">TailwindCSS</span>
                <span class="project-tag">Vercel</span>
              </div>
              <h3>Nexa - Real-Time Social Chat</h3>
              <p>Ứng dụng nhắn tin thời gian thực giả lập trải nghiệm mạng xã hội hiện đại như Facebook / Instagram.</p>
              <ul class="project-highlights">
                <li>✓ Trò chuyện &amp; gửi tin nhắn thời gian thực</li>
                <li>✓ Giao diện mượt mà phong cách Facebook / Instagram</li>
                <li>✓ Tối ưu hóa UI/UX trên Mobile &amp; Desktop</li>
                <li>✓ Triển khai trực tiếp trên môi trường Vercel</li>
              </ul>
              <div class="project-links">
                <a href="https://nexa-lam-tu.vercel.app/" target="_blank" class="project-link-btn project-link-live">
                  ${EXT_ICON} Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3: Cakling - Làng Dệt Chăm Mỹ Nghiệp -->
          <div class="project-card glass-card" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">🧵</span>
            </div>
            <div class="project-info">
              <div class="project-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">Văn Hóa &amp; Di Sản</div>
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">TailwindCSS</span>
                <span class="project-tag">UI/UX Design</span>
                <span class="project-tag">Vercel</span>
              </div>
              <h3>Cakling - Làng Dệt Chăm Mỹ Nghiệp</h3>
              <p>Dự án quảng bá và thúc đẩy ngành dệt thổ cẩm truyền thống lâu đời của làng người Chăm Mỹ Nghiệp.</p>
              <ul class="project-highlights">
                <li>✓ Tôn vinh di sản văn hóa dệt thổ cẩm truyền thống</li>
                <li>✓ Giao diện nghệ thuật đậm nét di sản làng Mỹ Nghiệp</li>
                <li>✓ Quảng bá sản phẩm &amp; nghệ nhân làng nghề Chăm</li>
                <li>✓ Đã triển khai và hoạt động trên Vercel</li>
              </ul>
              <div class="project-links">
                <a href="https://cakling.vercel.app/#" target="_blank" class="project-link-btn project-link-live">
                  ${EXT_ICON} Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4: Dara Beauty Center (Featured Client) -->
          <div class="project-card glass-card" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">💄</span>
            </div>
            <div class="project-info">
              <div class="project-badge">Dự Án Khách Hàng</div>
              <div class="project-tags">
                <span class="project-tag">React</span>
                <span class="project-tag">Node.js</span>
                <span class="project-tag">Express</span>
                <span class="project-tag">MongoDB</span>
                <span class="project-tag">Vercel</span>
              </div>
              <h3>Dara Beauty Center</h3>
              <p class="project-role"><strong>Role:</strong> Full-Stack Developer</p>
              <ul class="project-highlights">
                <li>✓ Thiết kế website thẩm mỹ viện responsive hiện đại</li>
                <li>✓ Giao diện mobile-friendly, UX chuẩn</li>
                <li>✓ Tích hợp chức năng liên hệ &amp; đặt lịch</li>
                <li>✓ Tối ưu hiệu năng &amp; triển khai sản xuất</li>
              </ul>
              <div class="project-links">
                <a href="https://darabeautycenter.vercel.app/" target="_blank" class="project-link-btn project-link-live">
                  ${EXT_ICON} Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- Project 5: Travel Booking Platform -->
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
              </ul>
              <div class="project-links">
                <a href="https://github.com/ThuanLamTu/LocaTrip" target="_blank" class="project-link-btn">
                  ${GH_ICON} Xem GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- Project 6: Chicken Invader Game -->
          <div class="project-card glass-card" data-category="frontend">
            <div class="project-img-placeholder">
              <span class="project-icon">🐓</span>
            </div>
            <div class="project-info">
              <div class="project-tags">
                <span class="project-tag">Java</span>
                <span class="project-tag">JavaFX 21</span>
                <span class="project-tag">Maven</span>
                <span class="project-tag">OOP</span>
              </div>
              <h3>Chicken Invader Game</h3>
              <p>Game bắn gà arcade 2D xây dựng bằng Java + JavaFX 21 áp dụng lập trình hướng đối tượng (OOP).</p>
              <ul class="project-highlights">
                <li>✓ Java + JavaFX 21 + Apache Maven</li>
                <li>✓ OOP: Player, Enemy, Bullet, GameManager</li>
                <li>✓ Hệ thống nâng cấp đạn theo điểm số</li>
              </ul>
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
