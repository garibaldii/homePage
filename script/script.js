var menu = document.getElementById("menu");
var img = document.getElementById("desktop_img");
var btn_hamburguer = document.getElementById("btn_hbg");
var btn_hamburguer_close = document.getElementById("btn_hbg_close");

function responsive() {

    if (window.innerWidth <= 1200) {
        img.src = 'assets/images/image-web-3-mobile.jpg'
        btn_hamburguer.style.display = 'block'
        btn_hamburguer_close.style.display = 'flex'
        menu.style.display = 'none'

    }else {
        img.src = 'assets/images/image-web-3-desktop.jpg'
        btn_hamburguer.style.display = 'none'
        btn_hamburguer_close.style.display = 'none'
        menu.style.display = 'flex'
    }
}



window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);



btn_hamburguer.addEventListener('click', function() {
    menu.style.display = 'flex'
});

btn_hamburguer_close.addEventListener('click', function(){
    menu.style.display = 'none'
})

