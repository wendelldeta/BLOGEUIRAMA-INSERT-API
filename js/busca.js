const headerContente = document.querySelector("#header");
const searchContent = document.querySelector("#search");

const btnSearchOpen = document.querySelector("#header .iconSearch");
const btnSearchClose = document.querySelector("#search .closeSearch");


btnSearchOpen.addEventListener("click", function(){
    headerContente.style = "top: 50px;";
    searchContent.style = "top: 0; z-index: 99999";
});

btnSearchClose.addEventListener("click", function(){
    headerContente.style = "top: 0;";
    searchContent.style = "top: -50; z-index: 0;";
});



window.addEventListener("scroll", function(){
    headerContente.style = "top: 0;";
    searchContent.style = "top: -50;";
});