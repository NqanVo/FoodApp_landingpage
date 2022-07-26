const menu = document.querySelector("#menu");
const btn_menu = document.querySelector("#btn-menu");

btn_menu.addEventListener('click', function(){
    menu.classList.toggle("invisible");
    btn_menu.classList.toggle("text-white");
})