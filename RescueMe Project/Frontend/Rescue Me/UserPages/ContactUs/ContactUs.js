// ============================================================
// EmailJS Configuration - Change these with your own keys
// ============================================================

const EMAILJS_PUBLIC_KEY = "bXrP3lM4iIunC6e-s";   // ← غيّرها
const EMAILJS_SERVICE_ID = "service_kzuzrlg";    // ← غيّرها
const EMAILJS_TEMPLATE_ID = "template_twskv7n";  // ← غيّرها

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// ============================================================
// Form Submission Handler
// ============================================================

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get form values
    const from_name  = document.getElementById("from_name").value.trim();
    const from_email = document.getElementById("from_email").value.trim();
    const subject    = document.getElementById("subject").value.trim();
    const message    = document.getElementById("message").value.trim();

    // Validation
    if (!from_name || !from_email || !subject || !message) {
        alert("من فضلك املأ كل الحقول");
        return;
    }

    // Disable button and show loading state
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>جاري الإرسال...</span>";

    try {
        // Send email using EmailJS
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            from_name,
            from_email,
            subject,
            message
        });

        alert("✅ تم إرسال رسالتك بنجاح! سنرد عليك قريباً.");
        document.getElementById("contactForm").reset(); // Clear form

    } catch (err) {
        console.error("EmailJS Error:", err);
        alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
    } finally {
        // Restore button
        submitBtn.disabled = false;
        submitBtn.innerHTML = "<span>إرسال الرسالة</span><span>➤</span>";
    }
});