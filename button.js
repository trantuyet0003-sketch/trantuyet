const courseDropdown = document.querySelector(".course-dropdown");
const courseSelected = document.querySelector(".course-selected");
const courseOptions = document.querySelectorAll(".course-option");
const courseInput = document.querySelector("#course");

courseSelected.addEventListener("click", function (event) {

  event.stopPropagation();

  courseDropdown.classList.toggle("active");

});


courseOptions.forEach(function (option) {

  option.addEventListener("click", function (event) {

    event.stopPropagation();

    const value = this.dataset.value;
    const text = this.textContent.trim();

    courseSelected.querySelector("span").textContent = text;

    courseInput.value = value;

    courseDropdown.classList.remove("active");

  });

});


document.addEventListener("click", function () {

  courseDropdown.classList.remove("active");

});

document.addEventListener("DOMContentLoaded", function () {

    const selected = document.querySelector(".course-selected");
    const options = document.querySelector(".course-options");
    const optionItems = document.querySelectorAll(".course-option");
    const hiddenInput = document.querySelector("#course");

    // Click vào ô Select Your Course
    selected.addEventListener("click", function () {
        options.classList.toggle("active");
    });

    // Click vào từng khóa học
    optionItems.forEach(function (option) {

        option.addEventListener("click", function () {

            const value = this.getAttribute("data-value");
            const text = this.textContent.trim();

            // Đổi chữ Select Your Course thành tên khóa học
            selected.querySelector("span:first-child").textContent = text;

            // Lưu giá trị vào input hidden
            hiddenInput.value = value;

            // Đóng dropdown
            options.classList.remove("active");
        });

    });

    // Click ra ngoài thì đóng dropdown
    document.addEventListener("click", function (event) {

        if (
            !selected.contains(event.target) &&
            !options.contains(event.target)
        ) {
            options.classList.remove("active");
        }

    });

});
