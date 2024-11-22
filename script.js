// Load the Home Page by default
window.onload = function () {
  navigateTo('home');
};

function navigateTo(page) {
  const content = document.getElementById('main-content');

  // Home Page
  if (page === 'home') {
    content.innerHTML = `
      <section class="home-section">
        <h1>Welcome to NetSa'ed</h1>
        <p>Your gateway to bridging education, career, and innovation. Explore the options below:</p>
        <div class="button-group">
          <button class="action-btn" onclick="window.location.href='real-world-experience.html'">Apply for Real-World Experience</button>
          <button class="action-btn" onclick="window.location.href='job-experiences.html'">View Available Jobs</button>
          <button class="action-btn" onclick="window.location.href='faculty-meeting.html'">Schedule a Meeting</button>
        </div>
      </section>
    `;
  }
  // About Page
  else if (page === 'about') {
    content.innerHTML = `
      <section class="about-section">
        <h1>About Us</h1>
        <p>Welcome to NetSa'ed, where we connect students and industries for career growth.</p>
      </section>
    `;
  }
  // Contact Page
  else if (page === 'contact') {
    content.innerHTML = `
      <section class="contact-section">
        <h1>Contact Us</h1>
        <p>Email: contact@netsaed.com</p>
        <p>Phone: +974-123-456-789</p>
      </section>
    `;
  }
}
