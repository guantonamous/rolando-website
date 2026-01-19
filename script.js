// Toggle mobile menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/mbddybnb", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.textContent = "Message sent successfully!";
    form.reset();
  } else {
    status.textContent = "Oops! There was a problem.";
  }
});

