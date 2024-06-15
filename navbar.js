(function() {
    const menu = document.getElementsByTagName("menu")[0];
    const main = document.getElementsByTagName("main")[0];
    const navbarItems = Array.from(document.getElementsByClassName("navbar-item"));
    
    for (const navbarItem of navbarItems) {
        const targetMode = navbarItem.getAttribute("target");
        const targetModeEl = document.getElementById(targetMode);
    
        navbarItem.addEventListener("click", function() {
            Array.from(menu.children).forEach(el => el.classList.remove("active"));
            Array.from(main.children).forEach(el => el.classList.remove("active"));
    
            targetModeEl.classList.add("active");
            navbarItem.classList.add("active");
        });
    }
})();