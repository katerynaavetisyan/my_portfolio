const header = document.querySelector('.navbar')

window.onscroll = function () {
    const top = document.documentElement.scrollTop;
    if (top >= 100) {
        header.classList.add("navbarDark");
    } else {
        header.classList.remove("navbarDark");
    }
};
function trigger() {
    document.getElementById("hover").addEventListener("mouseover", popup);
    function popup() {
        alert("Welcome to my WebPage!!!");
    }
}