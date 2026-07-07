export function renderExperience() {
  return `
    <section class="experience-section section" id="experience">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-subtitle">Chặng Đường Phát Triển</span>
          <h2 class="section-title">Học Vấn &amp; Kinh Nghiệm</h2>
        </div>
        <div class="timeline" id="experienceTimeline">

          <!-- Internship DKP -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <span class="timeline-date">24/01/2025 - 26/04/2025</span>
              <h3>Thực Tập Sinh Phát Triển &amp; Kiểm Thử</h3>
              <span class="timeline-company">Công ty TNHH Tin Học và Thương Mại DKP</span>
              <p>
                Tham gia lập trình các API endpoints cho hệ thống quản lý nội bộ sử dụng
                Node.js &amp; Express. Phối hợp với team QA thiết kế tài liệu kiểm thử,
                thực hiện viết test case trên Postman, giảm thời gian hồi đáp lỗi lên đến 20%.
              </p>
            </div>
          </div>

          <!-- Education UIT -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <span class="timeline-date">Năm 2021 - 2025</span>
              <h3>Tốt nghiệp Cử nhân Khoa học Máy tính</h3>
              <span class="timeline-company">Đại học Công nghệ thông tin (UIT) - ĐHQG TP.HCM</span>
              <p>
                Học tập chuyên sâu về cấu trúc dữ liệu và giải thuật, lập trình hướng đối
                tượng OOP với Java, C++. Xây dựng đồ án tốt nghiệp ứng dụng Web MERN Stack.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
