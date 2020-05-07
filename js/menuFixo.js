const menu = document.querySelector("#header .container");
const iconBusca = document.querySelector("#header .container .iconSearch");
const iconBar = document.querySelector("#header .container .iconBars");
const logoFixo = document.querySelector("#header .row .logoFixo");

window.addEventListener("scroll", function(){
    if(window.scrollY === 0){
       menu.classList.remove("menuFixo")
       iconBusca.style = "color: #fff;";
       iconBar.style = "color: #fff;";
       logoFixo.style = "display: none";
    }else if(window.scrollY >= 200){
        menu.classList.add("menuFixo");
        logoFixo.style = "display: initial";
    }
});