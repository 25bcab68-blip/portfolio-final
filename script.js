// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// ✅ FIXED FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  try {
    const response = await fetch("https://portfolio-final-6nvr.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message Sent Successfully 🚀");
      this.reset();
    } else {
      alert(data.error || "Server error");
    }

  } catch (err) {
    console.error(err);
    alert("Backend not connected ❌");
  }
});