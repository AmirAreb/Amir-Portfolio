
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", function () {
      const isOpen = !navbar.classList.contains("open");

      navbar.classList.toggle("open", isOpen);
      navbar.classList.toggle("active", isOpen);

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("open", "active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Update footer year if the element exists
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Contact form: support either ID used in your HTML
  const contactForm =
    document.getElementById("contact-form") ||
    document.getElementById("contactForm");

  const formStatus =
    document.getElementById("form-status") ||
    document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!name || !email || !subject || !message) {
        if (formStatus) {
          formStatus.textContent = "Please complete all fields.";
        }
        return;
      }

      // Replace with your real email address
      const recipient = "your-email@gmail.com";

      const body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        message;

      const mailtoLink =
        "mailto:" + recipient +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (formStatus) {
        formStatus.textContent =
          "Opening your email app. Please send the message there.";
      }

      window.location.href = mailtoLink;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (!menuToggle || !navbar) {
    console.error("Menu button or navbar not found.");
    return;
  }

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("open");
  });
});
