const options = document.getElementsByClassName("option")
const bar = document.getElementsByClassName("decoration_bar")
for(i in [0,1,2]){
    bar[i].style.left = options[i].offsetLeft+"px";
    bar[i].style.top = options[i].offsetTop+options[i].offsetHeight+"px";
}
function extend_bar(id){
    bar[id].style.left = options[id].offsetLeft+"px";
    bar[id].style.top = options[id].offsetTop+options[id].offsetHeight+3+"px";
    bar[id].style.width = options[id].offsetWidth+"px";
    bar[id].style.transition = "ease-in-out 0.3s"
}
function retract_bar(id){
    bar[id].style.width = "0px";
}