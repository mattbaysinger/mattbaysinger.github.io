const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: Dark)");
const themeToggle = document.getElementById("theme-toggle");

// Checks theme on inial page load and sets theme and icon class
themeToggle.innerHTML = `<span class="material-symbols-outlined">
    ${prefersDarkScheme.matches ? "light_mode" : "dark_mode"}
</span>`;
document.body.classList.toggle(
  prefersDarkScheme.matches ? "dark-theme" : "light-theme"
);

// listen for change to system theme and update accordingly
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches }) => {
    matches ? toggleDark() : toggleLight();
  });

// Listen for a click on the button
themeToggle.addEventListener("click", function () {
  prefersDarkScheme.matches
    ? document.body.classList.contains("light-theme")
      ? toggleDark()
      : toggleLight()
    : document.body.classList.contains("dark-theme")
    ? toggleLight()
    : toggleDark();
});

function toggleLight() {
  themeToggle.innerHTML = `<span class="material-symbols-outlined">
             dark_mode
             </span>`;
  document.body.classList.replace("dark-theme", "light-theme");
}

function toggleDark() {
  themeToggle.innerHTML = `<span class="material-symbols-outlined">
  light_mode
  </span>`;
  document.body.classList.replace("light-theme", "dark-theme");
}
