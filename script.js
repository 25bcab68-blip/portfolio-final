// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
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

// Contact Form Submit
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    try {

      const response = await fetch(
        "https://portfolio-final-82gv.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            message
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message Sent Successfully 🚀");
        form.reset();
      } else {
        alert(data.message || "Server Error ❌");
      }

    } catch (error) {
      console.log(error);
      alert("Backend not connected ❌");
    }
  });

});