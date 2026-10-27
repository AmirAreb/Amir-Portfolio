
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      navbar.classList.contains("open")
    );
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const recipient = "amirareb@example.com";

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    const mailto =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    formStatus.textContent =
      "Opening your email application...";

    window.location.href = mailto;
  });
}

const yearElement = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

yearElement.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  // Replace this with your real email address.
  const receiver = "your-email@gmail.com";

  const emailBody =
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    message;

  const mailtoLink =
    "mailto:" + receiver +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(emailBody);

  formStatus.textContent =
    "Opening your email app. Please send the message there.";

  window.location.href = mailtoLink;
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (!menuToggle || !navbar) return;

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
});
