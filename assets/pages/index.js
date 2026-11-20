// About section tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedTab = button.dataset.tab;

    tabButtons.forEach(function (tabButton) {
      tabButton.classList.remove("active");
      tabButton.setAttribute("aria-selected", "false");
    });

    tabPanels.forEach(function (panel) {
      panel.classList.remove("active");
      panel.hidden = true;
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    const selectedPanel = document.getElementById(selectedTab);
    if (selectedPanel) {
      selectedPanel.hidden = false;
      selectedPanel.classList.add("active");
    }
  });
});

// Highlight the navigation link for the section currently being viewed
const navLinks = document.querySelectorAll(".main-nav .click");
const pageSections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {
  let currentSection = "spotlight";

  pageSections.forEach(function (section) {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection);
  });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);

// Automatically update the copyright year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
