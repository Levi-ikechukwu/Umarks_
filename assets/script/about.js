AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector(".nav-overlay");
    var closeicon = document.querySelector(".closeicon");
    var menu = document.querySelector(".menu-icon");

    if (menu && closeicon && overlay) {
        menu.addEventListener("click", function() {
            overlay.style.display = "flex";
        });

        closeicon.addEventListener("click", function() {
            overlay.style.display = "none";
        });
    }
});