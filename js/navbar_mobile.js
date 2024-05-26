const navbar = document.querySelector(".navbar")
const navbar_togler = document.querySelector(".ri-menu-3-line")
const menu = document.querySelector("#menu")
const nav_items = document.getElementsByClassName("navbar-item_custom") 
var delay_navbar_mobile_change = 300;
var can_change = true

//pff who needs comments?
addEventListener("resize", (event) => {});

onresize = (event) => {
    if(screen.width>991.98){
        for(let i = 0; i<nav_items.length; i++){
            nav_items[i].style.display = "block";
            nav_items[i].classList.add("navbar-item_custom_active")
    }
    }

};
function change_color_navbar(){
    if(navbar.classList.contains("navbar_togler_active")){
        navbar.classList.remove("navbar_togler_active")
    }
    else{
        navbar.classList.add("navbar_togler_active")
    }
}
navbar_togler.addEventListener("click", function () {
    if(can_change == true){
        if(menu.style.height == "0vh"){
            menu.style.display = "flex"
            menu.style.height = "85vh"
            navbar.classList.add("navbar_togler_active")
            for(let i = 0; i<nav_items.length; i++){
                    nav_items[i].style.display = "flex";
            }
            setTimeout(function(){nav_items[0].classList.add("navbar-item_custom_active")}, 200)
            setTimeout(function(){nav_items[1].classList.add("navbar-item_custom_active")}, 400)
            setTimeout(function(){nav_items[3].classList.add("navbar-item_custom_active")}, 600)
            setTimeout(function(){nav_items[4].classList.add("navbar-item_custom_active")}, 800)
        }else{
            setTimeout(function(){nav_items[4].classList.remove("navbar-item_custom_active"); }, 200)
            setTimeout(function(){nav_items[3].classList.remove("navbar-item_custom_active"); }, 400)
            setTimeout(function(){nav_items[1].classList.remove("navbar-item_custom_active"); }, 600)
            setTimeout(function(){nav_items[0].classList.remove("navbar-item_custom_active"); }, 800)
            setTimeout(function(){
                for(let i = 0; i<nav_items.length; i++){
                    nav_items[i].style.display = "none"
                }
            }, 1000)
            setTimeout(function(){navbar.classList.remove("navbar_togler_active")}, 1100)
            setTimeout(function(){
                menu.style.display = "none" 
                menu.style.height = "0vh"
                }, 1500)
        }
        can_change = false
        setTimeout(function(){can_change = true}, delay_navbar_mobile_change)
  }})