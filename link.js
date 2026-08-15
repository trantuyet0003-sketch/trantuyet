const menuLinks = document.querySelectorAll('.menu-link');
const currentPage = location.pathname.split('/').pop();

menuLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});