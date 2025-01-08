AOS.init();

// var overlay = document.getElementById("nav-overlay");
// var closeicon = document.getElementById("closeicon");
// var menu = document.getElementById("menu");

// menu.addEventListener("click", function() {
//     overlay.style.display = "flex"

// })
// closeicon.addEventListener("click", function() {
//     overlay.style.display = "none"
// })

// logo.addEventListener("click", function() {
//     modal.style.display = "flex"
// })

// close1.addEventListener("click", function() {
//     modal.style.display = "none"
// })

function show(){
    const sidebar = document.querySelector('.nav-mobile');
    sidebar.style.display = 'flex';
}
function hide(){
    const sidebar = document.querySelector('.nav-mobile');
    sidebar.style.display = 'none';
}