document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove("active");
                }
            });

            dropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
        }
    });
});
