
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const icon = document.getElementById("menuIcon");

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        icon.className = "fas fa-times";
    } else {
        icon.className = "fa-solid fa-bars-staggered";
    }
}
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Xóa active khỏi tất cả link
        navLinks.forEach(l => l.classList.remove('active'));
        // Thêm active cho link được click
        this.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const filterItems = document.querySelectorAll('.filter-item');

  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      // Xóa active cũ
      filterItems.forEach(el => el.classList.remove('active'));
      // Thêm active cho phần tử click
      this.classList.add('active');
      // Không cần chuyển trang, href sẽ tự load
    });
  });
});
  document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');

    filterItems.forEach(item => {
      item.addEventListener('click', function() {
        // Xóa active khỏi tất cả mục
        filterItems.forEach(el => el.classList.remove('active'));

        // Thêm active cho mục được click
        this.classList.add('active');

        // Chuyển trang theo data-link
        const link = this.getAttribute('data-link');
        if (link) {
          window.location.href = link;
        }
      });
    });
  });
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuIcon = document.getElementById("menuIcon");

function toggleMenu() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars-staggered");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars-staggered");
  }
}

/* Bấm ra ngoài là tự tắt */
overlay.addEventListener("click", function () {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars-staggered");
});

/* ============================= */
/* 👉 THÊM PHẦN NÀY */
/* ============================= */

// class ẩn icon
menuIcon.classList.add("can-hide");

let resizeTimer;

// MỖI LẦN KÉO NGANG → TẮT BARS
window.addEventListener("resize", () => {
  // đóng sidebar
  sidebar.classList.remove("active");
  overlay.classList.remove("active");

  // reset icon
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars-staggered");

  // ẩn bars
  menuIcon.classList.add("hide");

  // nếu muốn HIỆN LẠI sau khi dừng resize 300ms → bỏ comment
  /*
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    menuIcon.classList.remove("hide");
  }, 300);
  */
});
document.querySelectorAll('a[data-page]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    loadPage(link.getAttribute('href'));
  });
});
