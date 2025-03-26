document.addEventListener("DOMContentLoaded", function () {
    const settingsToggle = document.querySelector(".settings-toggle");
    const settingsMenu = document.querySelector(".settings-dropdown");
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const lightModeBtn = document.getElementById("light-mode-btn");
    const togglePageBtn = document.getElementById("toggle-page-btn");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle settings dropdown
    settingsToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        document.querySelector(".settings").classList.toggle("active");
    });

    // Close settings when clicking anywhere outside
    document.addEventListener("click", function (event) {
        if (!settingsMenu.contains(event.target) && !settingsToggle.contains(event.target)) {
            document.querySelector(".settings").classList.remove("active");
        }
    });

    // Enable Dark Mode
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    });

    // Enable Light Mode
    lightModeBtn.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    });

    // Check stored theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle Page View (Now also hides the title)
    togglePageBtn.addEventListener("click", function () {
        document.body.classList.toggle("page-hidden");

        if (document.body.classList.contains("page-hidden")) {
            togglePageBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Show Page';
        } else {
            togglePageBtn.innerHTML = '<i class="fas fa-eye"></i> Toggle Page';
        }
    });

    // Navbar Toggle for Mobile
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });

    // Close menu if clicking outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("open");
        }
    });

    // Highlight Active Page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});