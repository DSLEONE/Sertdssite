function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  
    );
  }
  const appear_section = [document.querySelector("#about_title"),document.querySelector("#servers_title"),document.querySelector("#banAndWarn_title"),document.querySelector("#support_title")]
  const appear_lines = [document.querySelector(".line_about_decoration"),document.querySelector("#secondary_line_bottom")]
  const appear_counter = [document.querySelectorAll(".counter")]
  const appear_seciont_lines = [document.querySelector("#servers_line")]
  var repeat = true

  const support_page_hero_content = document.querySelector("#hero_content_text_support")
  if(support_page_hero_content != undefined){
    support_page_hero_content.classList.add("hero_content_text_support_active")
  }
  const ban_page_hero_content = document.querySelector("#hero_content_text_ban")
  if(ban_page_hero_content != undefined){
    ban_page_hero_content.classList.add("hero_content_text_ban_active")
  }
  if(ban_page_hero_content != undefined){
    ban_page_hero_content.classList.add("hero_content_text_ban_active")
  }
  document.querySelector("#hero_content_text_lb") != undefined ? document.querySelector("#hero_content_text_lb").classList.add("hero_content_text_lb_active") : null
  document.addEventListener('scroll', function () {
      for(i in appear_section){
          if(appear_section[i] != undefined){
              if(isInViewport(appear_section[i])){
                  let element = appear_section[i].id.split("_")[0]
                  let total_elements = document.querySelector("#"+element+"_container")
                  let line = document.querySelector("#"+element+"_line")
                  appear_delayed(total_elements, line)
              }
          }
      }
      for(i in appear_lines){
          if(appear_lines[i] != undefined){
              if(isInViewport(appear_lines[1])){
                  let primary_lines = [document.querySelector("#main_line"),document.querySelector("#main_line_bottom")]
                  let secondary_lines = [document.querySelector("#secondary_line"),document.querySelector("#secondary_line_bottom")]
                  appear_lines_decoration(primary_lines,secondary_lines)
              }
          }
      }
      for(let i = 0; i < appear_counter.length; i++){
        if(appear_counter[0][i] != undefined){
            if(isInViewport(appear_counter[0][i]) && repeat == true){
                Delayed_loop_counters()
                repeat = false
            }
        }
      }
  
    });
function appear_delayed(section, section_line){
    section.classList.add("appear_active")
    if(section_line != undefined ){
        section_line.classList.add("line_active")
    }
}
function appear_lines_decoration(main_lines, secondary_lines){
    for(i in main_lines){
        main_lines[i].classList.add("appear_active_line_main")
    }
    setTimeout(function(){
        for(i in secondary_lines){
            secondary_lines[i].classList.add("appear_active_line_secondary")
        }
    },1000)
}
const counters_server = document.getElementsByClassName("counter")
var initial_values = [0,0]
var max_values = []
var current_players = []
for (let i = 0; i < counters_server.length; i++) {
    max_values.push(Number(counters_server[i].innerHTML.split("/")[1]))
    current_players.push(Number(counters_server[i].innerHTML.split("/")[0]))
  }
  var interval;
  var delay = 10
    var i = 1;                  

function Delayed_loop_counters() {  
    
  setTimeout(function() {   
    for(let i = 0; i < counters_server.length; i++){
        counters_server[i].style.opacity = "1"
        if(initial_values[i] < current_players[i]){
          setTimeout(function() {counters_server[i].innerHTML = initial_values[i]+"/"+max_values[i]}, 10);
          initial_values[i]++
        }
        delay = delay+2.5
        }                 
        if (current_players[0] != initial_values[0] || current_players[1] != initial_values[1]){
            Delayed_loop_counters()
            }                     
  }, delay)
}
