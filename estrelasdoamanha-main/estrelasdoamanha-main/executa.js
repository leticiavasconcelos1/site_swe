function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const menu = document.querySelector("nav ul");
    const menuIcon = document.querySelector(".menu-icon");

    if (menu.classList.contains("active") && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active"); 
    }
});