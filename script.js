// Load the Home Page by default
window.onload = function() {
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
                    <button class="action-btn" onclick="applyRealWorldExperience()">Apply for Job-Shadowing Experience</button>
                    <button class="action-btn" onclick="viewAvailableJobs()">View Available Jobs</button>
                    <button class="action-btn" onclick="scheduleMeeting()">Apply for a Meeting with a University Student</button>
                </div>
                <div class="tips-slider">
                    <h3>Quick Tips</h3>
                    <p id="slider-text">Explore our job opportunities to gain real-world experience.</p>
                </div>
            </section>
        `;
  
        // Add interactivity for slider
        startTipsSlider();
    }
    // About Page
    else if (page === 'about') {
        content.innerHTML = `
            <section class="about-section">
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>NetSa'ed</strong>, where innovation meets purpose. Our mission is to connect industries, universities, and high schools to foster collaborative learning and provide students with meaningful opportunities to gain real-world experience.
                </p>
                <p>
                    We are dedicated to transforming aspirations into reality by leveraging cutting-edge technology to assist students in Qatar and beyond. <strong>NetSa'ed</strong> empowers students with clear goals and actionable insights for their future, reducing the global challenge of career and educational uncertainty.
                </p>
            </section>
        `;
    }
    // Contact Page
    else if (page === 'contact') {
        content.innerHTML = `
            <section class="contact-section">
                <h1>Contact Us</h1>
                <p>If you have any questions, feedback, or partnership inquiries, feel free to reach out to us:</p>
                <ul class="contact-list">
                    <li><strong>Email:</strong> <a href="mailto:contact@netsaed.com">olzhasbekzhakenov2026@u.northwestern.edu</a></li>
                    <li><strong>Phone:</strong> +974-123-456-789</li>
                    <li><strong>Address:</strong> Doha, Qatar</li>
                </ul>
                <p>We look forward to hearing from you!</p>
            </section>
        `;
    }
  }
  
  // Functionality for tips slider on Home Page
  function startTipsSlider() {
    const tips = [
        "Explore our job opportunities to gain real-world experience.",
        "Schedule a meeting with university faculty to explore programs.",
        "Create unique CVs and resumes with NetSa'ed."
    ];
    let index = 0;
    const sliderText = document.getElementById('slider-text');
    setInterval(() => {
        index = (index + 1) % tips.length;
        sliderText.textContent = tips[index];
    }, 4000); // Change text every 4 seconds
  }
  
  // Placeholder Functions for Button Actions
  function applyRealWorldExperience() {
    alert("Redirecting to Real-World Experience Application...");
  }
  
  function viewAvailableJobs() {
    alert("Displaying Available Job Experiences...");
  }
  
  function scheduleMeeting() {
    alert("Scheduling a Meeting with University Faculty...");
  }
  function applyRealWorldExperience() {
    window.location.href = 'file:///C:/Users/user/OneDrive/Desktop/my-app/real-world-experience.html'; // Navigate to Real-World Experience Page
  }
  
  function viewAvailableJobs() {
    window.location.href = 'file:///C:/Users/user/OneDrive/Desktop/my-app/job-experiences.html'; // Navigate to Job Experiences Page
  }
  
  function scheduleMeeting() {
    window.location.href = 'file:///C:/Users/user/OneDrive/Desktop/my-app/faculty-meeting.html'; // Navigate to Faculty Meeting Page
  }