const btnMenuRetratilOpen = document.querySelector("#header .iconBars");
const btnMenuRetratilClose = document.querySelector("#sidebar a");

const headerContent = document.querySelector("#header");
const menuSidebar = document.querySelector("#sidebar");

btnMenuRetratilOpen.addEventListener("click", function(){
    headerContent.style = "left: -270px;";
    menuSidebar.style = "right: 0px; visibility: visible;";
})



btnMenuRetratilClose.addEventListener("click", function(event){
    event.preventDefault();
    headerContent.style = "left: 0;";
    menuSidebar.style = "right: -270px; visibility: hidden;";
})