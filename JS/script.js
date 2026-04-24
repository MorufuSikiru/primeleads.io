document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // run once
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
});

  document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("TguTHH0gO1AXs5WqZ");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) {
    console.log("❌ Form not found");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_7keau12",
      "template_lj4hiff",
      this
    )
    .then(() => {
      status.innerText = "✅ Message sent!";
      status.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      status.innerText = "❌ Failed!";
      status.style.color = "red";
    });
  });

});



const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});