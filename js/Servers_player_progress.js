const circles = document.getElementsByClassName("container_circle_counter")
const counters = document.getElementsByClassName("counter")
const part_first_of_circle = document.getElementsByClassName("first")
const part_second_of_circle = document.getElementsByClassName("second")
for(i = 0; i< counters.length; i++){
    let player_amount = Number(counters[i].innerHTML.split("/")[0])
    if(player_amount>30 && player_amount<61){
        circles[i].style.clipPath = "inset(0px 0px 0px 0px)"
        part_second_of_circle[i].setAttribute("transform", "scale(2,2) translate(5,5) rotate(-"+(180-(180/30 * (player_amount-30)))+""+" 100 100)")
    }else{
        part_first_of_circle[i].setAttribute("transform", "scale(2,2) translate(5,5) rotate(-"+(180-(180/30*player_amount))+" 100 100)")
    }

}