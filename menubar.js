const menu = document.getElementById("menu")
const back = document.getElementById("back")
const back2 = document.getElementById("back2")
const nav = document.getElementById("nav")

menu.addEventListener("click", () => {
    if (nav.className === "head-nav") {
        nav.classList.add("open-menu");
        back.classList.add("open");
        back2.classList.add("open")
    }else {
        nav.classList.remove("open-menu");
        back.classList.remove("open");
        back2.classList.remove("open")
        menu.textContent = "≡";
    }
});

back.addEventListener("click", () => {
    back.classList.remove("open");
    back2.classList.remove("open")
    nav.classList.remove("open-menu");
    menu.textContent = "≡";
});