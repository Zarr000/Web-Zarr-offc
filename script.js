
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('navbar-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  }

  // Close menu on click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  });

  // Highlight active link
  const path = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});
