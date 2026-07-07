export function renderAbout() {
  return `
    <section class="about-section section" id="about">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-subtitle">Tìm Hiểu Về Tôi</span>
          <h2 class="section-title">Hành Trình &amp; Phong Cách Làm Việc</h2>
        </div>
        <div class="about-grid">
          <div class="about-info glass-card">
            <h3>Tôi là ai?</h3>
            <p>
              Là <strong>Fullstack Developer</strong> có kinh nghiệm xây dựng các ứng dụng web
              responsive sử dụng <strong>React</strong>, <strong>JavaScript</strong>,
              <strong>Node.js</strong> và <strong>MongoDB</strong>.
            </p>
            <p>
              Mình có niềm đam mê tạo ra giao diện người dùng sạch đẹp, tối ưu hiệu năng và
              không ngừng học hỏi các công nghệ web hiện đại. Trong thời gian thực tập, mình
              đã được làm việc thực tế với khách hàng, triển khai sản phẩm và hỗ trợ sau khi
              ra mắt.
            </p>
            <p>
              Mình cũng biết vận dụng các công cụ <strong>AI</strong> vào quy trình phát triển
              để tăng tốc độ và nâng cao chất lượng code.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card glass-card">
              <span class="stat-num">01+</span>
              <span class="stat-label">Năm kinh nghiệm thực tế (Học tập &amp; Intern)</span>
            </div>
            <div class="stat-card glass-card">
              <span class="stat-num">05+</span>
              <span class="stat-label">Dự án hoàn thiện (Cá nhân &amp; Nhóm)</span>
            </div>
            <div class="stat-card glass-card">
              <span class="stat-num">02</span>
              <span class="stat-label">Client projects đã bàn giao</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
