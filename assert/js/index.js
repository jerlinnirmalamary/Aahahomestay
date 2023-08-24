// nav Bcolor

function changeBg() {
    const navbar = document.getElementById('nav');
    var scrollValue = window.scrollY;

    if (scrollValue < 15) {
        // navbar.classList.remove('bgColor');

        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "#b7385c";
        // navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll', changeBg);