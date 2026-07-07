export function renderSkills() {
  return `
    <section class="skills-section section" id="skills">
      <div class="container">
        <div class="section-title-wrap text-center">
          <span class="section-subtitle">Hộp Công Cụ Của Tôi</span>
          <h2 class="section-title">Kỹ Năng &amp; Công Nghệ</h2>
        </div>
        <div class="skills-grid" id="skillsGrid">

          <!-- Frontend -->
          <div class="skills-category-card glass-card" id="skillsFrontend">
            <div class="category-header">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3>Frontend</h3>
            </div>
            <div class="skill-tags">
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span>
              <span class="skill-tag">JavaScript ES6+</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">TailwindCSS</span>
            </div>
          </div>

          <!-- Backend -->
          <div class="skills-category-card glass-card" id="skillsBackend">
            <div class="category-header">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <h3>Backend</h3>
            </div>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express</span>
            </div>
          </div>

          <!-- Database -->
          <div class="skills-category-card glass-card" id="skillsDatabase">
            <div class="category-header">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
              <h3>Database</h3>
            </div>
            <div class="skill-tags">
              <span class="skill-tag">MongoDB</span>
            </div>
          </div>

          <!-- Tools -->
          <div class="skills-category-card glass-card" id="skillsTools">
            <div class="category-header">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <h3>Tools</h3>
            </div>
            <div class="skill-tags">
              <span class="skill-tag">Git</span>
              <span class="skill-tag">GitHub</span>
              <span class="skill-tag">Postman</span>
              <span class="skill-tag">Vercel</span>
              <span class="skill-tag">Render</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
