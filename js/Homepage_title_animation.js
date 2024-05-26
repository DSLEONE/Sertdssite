const letters = document.querySelectorAll(".letter");
const typerwriter_bar = document.querySelector("#typewriter")
const animation_opacity_pack = document.querySelectorAll(".home_item_hidden")
var times = 1;
var end_animation = false;
const background_video = document.querySelector("#video_background")
var delay_animation_intial = 1000;
function animation(){
    setTimeout(function(){
        typerwriter_bar.style.display = "none"
    },500)
    setTimeout(function(){
            typerwriter_bar.style.display = "block"
            if(times != 0){
                times = times-1
                animation()
            }
        else{
            if(end_animation == false){
                setTimeout(function(){
                    otherpart_animation()
                },250)
            }else{
                typerwriter_bar.style.display = "none"
                    for(let i = 0; i<animation_opacity_pack.length; i++){
                        animation_opacity_pack[i].classList.add("home_item_active")
                        document.querySelector(".navbar").style.transition =  "0.3s ease-in-out "
                     }
                background_video.play()

            }
        }
    },delay_animation_intial)
}
var times_for_appering_letters = 0;
var delay_animation_hometext = 60
var decelerating_value = 0
function otherpart_animation(){
        setTimeout(function(){
            letters[times_for_appering_letters].style.display ="block"
            times_for_appering_letters++
            if(times_for_appering_letters != letters.length){
                otherpart_animation()
                delay_animation_hometext = delay_animation_hometext+decelerating_value
            }else{
                typerwriter_bar.style.display = "none"
                delay_animation_hometext = 0
                end_animation = true
                delay_animation_intial = 500;
                animation()
            }
        },delay_animation_hometext)
}   
animation()