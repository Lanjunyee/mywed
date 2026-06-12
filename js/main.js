/* ===== Mobile Navigation Toggle ===== */
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const navList = document.getElementById('nav-list');

  if (!toggle || !navList) return;

  // Toggle menu on hamburger click
  toggle.addEventListener('click', function () {
    navList.classList.toggle('open');
  });

  // Close menu when a nav link is clicked (mobile)
  navList.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
    }
  });
})();
