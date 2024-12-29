document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  // Check saved theme
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      body.classList.contains("dark-mode") ? "enabled" : null
    );
  });
});
