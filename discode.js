
const webhookURL = "WEBHOOK_URL_CỦA_BẠN";

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        content: "📩 **Có liên hệ mới!**",
        embeds: [
            {
                title: "Thông tin liên hệ",
                color: 5814783,
                fields: [
                    { name: "👤 Họ tên", value: name, inline: false },
                    { name: "📧 Email", value: email, inline: false },
                    { name: "📝 Nội dung", value: message, inline: false }
                ],
                footer: {
                    text: "Contact Form Website"
                },
                timestamp: new Date()
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Gửi thành công!");
        document.getElementById("contactForm").reset();
    })
    .catch(() => {
        alert("Có lỗi xảy ra, vui lòng thử lại!");
    });
});
const webhookURL = "https://discord.com/api/webhooks/1502754550610788445/7YWt8B4hnmHnOdERgxahH_ZQioSXjs6I8zKd0skzNb2QI8BzhG7W4QteajfIPRnjGoqZ";

document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = [];

    // Lấy toàn bộ input
    form.querySelectorAll("input").forEach(input => {
        // Bỏ qua button, submit, file...
        if (
            input.type === "submit" ||
            input.type === "button" ||
            input.type === "reset"
        ) {
            return;
        }

        // Checkbox
        if (input.type === "checkbox") {
            if (input.checked) {
                data.push({
                    name: input.name || input.id || input.placeholder || "Checkbox",
                    value: input.value || "Đã chọn"
                });
            }
            return;
        }

        // Radio
        if (input.type === "radio") {
            if (input.checked) {
                data.push({
                    name: input.name || input.id || "Radio",
                    value: input.value
                });
            }
            return;
        }

        // Các input bình thường + hidden
        if (input.value.trim() !== "") {
            data.push({
                name: input.name || input.id || input.placeholder || "Input",
                value: input.value.trim()
            });
        }
    });

    // Lấy select
    form.querySelectorAll("select").forEach(select => {
        if (select.value) {
            const option = select.options[select.selectedIndex];

            data.push({
                name: select.name || select.id || "Select",
                value: option ? option.textContent.trim() : select.value
            });
        }
    });

    // Lấy textarea
    form.querySelectorAll("textarea").forEach(textarea => {
        if (textarea.value.trim() !== "") {
            data.push({
                name: textarea.name || textarea.id || textarea.placeholder || "Message",
                value: textarea.value.trim()
            });
        }
    });

    // Lấy Course của bạn
    const course = document.getElementById("course");

    if (course && course.value.trim() !== "") {
        // Nếu chưa có course trong data thì thêm vào
        const alreadyExists = data.some(item =>
            item.name === "course"
        );

        if (!alreadyExists) {
            data.push({
                name: "Course",
                value: course.value
            });
        }
    }

    // Nếu không có dữ liệu
    if (data.length === 0) {
        alert("Không tìm thấy thông tin trong form.");
        return;
    }

    // Tạo nội dung gửi Discord
    let message = "📩 **THÔNG TIN KHÁCH HÀNG MỚI**\n\n";

    data.forEach(item => {
        message += `**${item.name}:** ${item.value}\n`;
    });

    // Discord giới hạn content 2000 ký tự
    if (message.length > 1900) {
        message = message.substring(0, 1900) + "\n...";
    }

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: message
            })
        });

        if (!response.ok) {
            throw new Error("Discord Webhook Error: " + response.status);
        }

        alert("Đăng ký thành công!");

        form.reset();

        // Reset lại course hiển thị
        const courseInput = document.getElementById("course");

        if (courseInput) {
            courseInput.value = "";
        }

    } catch (error) {
        console.error("Lỗi:", error);
        alert("Không thể gửi thông tin sang Discord.");
    }
});
