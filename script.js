const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const yearLabel = document.querySelector("#current-year");
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleLabel = themeToggle.querySelector(".theme-toggle-label");
const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");
const themeColorMeta = document.querySelector("#theme-color-meta");

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeLabel = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)} theme`;

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  themeToggleLabel.textContent = nextThemeLabel;
  themeToggleIcon.textContent = theme === "dark" ? "☀" : "◐";
  themeColorMeta.content = theme === "dark" ? "#171916" : "#f8f8f5";
}

yearLabel.textContent = new Date().getFullYear();
applyTheme(localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }
});
