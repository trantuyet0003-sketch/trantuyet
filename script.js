window.addEventListener("load", () => {
  
  document.querySelectorAll(".progress-bar").forEach(bar => {
    // thêm timeout nhỏ để animation bắt đầu ngay khi load
    setTimeout(() => {
      bar.style.width = bar.getAttribute("data-percent") + "%";
    }, 100);
  });
});
