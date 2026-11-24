
// =====================================
// 1. ABOUT SECTION TABS
// =====================================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const selectedTab = button.dataset.tab;

        // Remove active class from all buttons
        tabButtons.forEach(function (tabButton) {
            tabButton.classList.remove("active");
            tabButton.setAttribute("aria-selected", "false");
        });

        // Hide all tab panels
        tabPanels.forEach(function (panel) {
            panel.classList.remove("active");
            panel.hidden = true;
        });

        // Activate clicked button
        button.classList.add("active");
        button.setAttribute("aria-selected", "true");

        // Show selected panel
        const selectedPanel = document.getElementById(selectedTab);

        if (selectedPanel) {
            selectedPanel.hidden = false;
            selectedPanel.classList.add("active");
        }
    });
});


// =====================================
// 2. ACTIVE NAVIGATION ON SCROLL
// =====================================

const activeNavLinks = document.querySelectorAll(".main-nav .click");
const pageSections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {

    let currentSection = "spotlight";

    pageSections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    activeNavLinks.forEach(function (link) {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );

    });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);


// =====================================
// 3. AUTOMATIC COPYRIGHT YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================
// 4. MOBILE THREE-DOT NAVIGATION MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");
const mobileNavLinks = document.getElementById("navLinks");

if (menuBtn && mobileNavLinks) {

    // Open and close menu
    menuBtn.addEventListener("click", function () {

        mobileNavLinks.classList.toggle("open");

        const isOpen = mobileNavLinks.classList.contains("open");

        menuBtn.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after clicking a navigation link
    const navItems = mobileNavLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });


    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            !menuBtn.contains(event.target) &&
            !mobileNavLinks.contains(event.target)
        ) {

            mobileNavLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");

        }

    });

}
