export function renderContact() {
  return `
    <section class="contact-section section" id="contact">
      <div class="container contact-container">
        <div class="contact-info-wrap">
          <div class="section-title-wrap">
            <span class="section-subtitle">Liên Hệ</span>
            <h2 class="section-title">Hãy Cùng Tạo Nên Sự Khác Biệt</h2>
          </div>
          <p>Mình luôn sẵn sàng thảo luận về các dự án tiềm năng, cơ hội việc làm hoặc chỉ đơn giản là trao đổi về công nghệ.</p>
          <div class="contact-details">
            <div class="contact-detail-item">
              <div class="detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:lamthuan1243@gmail.com">lamthuan1243@gmail.com</a>
              </div>
            </div>
            <div class="contact-detail-item">
              <div class="detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4>Số điện thoại</h4>
                <a href="tel:+840397473493">0397 473 493</a>
              </div>
            </div>
            <div class="contact-detail-item">
              <div class="detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Địa điểm</h4>
                <span>64 Đường 16, Linh Trung, Thủ Đức, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrap glass-card" id="contactFormContainer">
          <form id="contactForm" class="contact-form">
            <div class="form-group">
              <label for="formName">Họ và Tên</label>
              <input type="text" id="formName" required placeholder="Nhập họ tên của bạn" />
            </div>
            <div class="form-group">
              <label for="formEmail">Email</label>
              <input type="email" id="formEmail" required placeholder="Nhập địa chỉ email" />
            </div>
            <div class="form-group">
              <label for="formMessage">Tin Nhắn</label>
              <textarea id="formMessage" required rows="5" placeholder="Bạn muốn trao đổi nội dung gì?"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block" id="btnSubmitForm">Gửi Tin Nhắn</button>
          </form>
          <div class="form-success-msg" id="formSuccessMsg">
            <span class="success-icon">✓</span>
            <h3>Cảm ơn bạn đã gửi tin nhắn!</h3>
            <p>Mình sẽ phản hồi lại cho bạn trong thời gian sớm nhất.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
