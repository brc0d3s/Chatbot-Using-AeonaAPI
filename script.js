document.addEventListener("DOMContentLoaded", function () {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    const toggleThemeButton = document.getElementById("toggle-theme");
    const printButton = document.getElementById("print-btn");

    // Dark mode toggle functionality
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Section toggle functionality
    document.querySelectorAll("h2.section-heading").forEach((heading) => {
        heading.addEventListener("click", function () {
            this.parentElement.classList.toggle("show-section");
        });
    });
    // Print button functionality
    printButton.addEventListener("click", function () {
        window.print();
    });
});
