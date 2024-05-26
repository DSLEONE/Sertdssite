function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  
    );
  }
  const cards = document.querySelectorAll(".main_cards")
  const title = document.querySelector("#support_title_page")
  const lines = document.querySelectorAll(".main_cards_line")
  document.addEventListener('scroll', function () {

    if(isInViewport(title)){
            title.classList.add("support_title_page_active")
            for(let i = 0; i<cards.length; i++){
                cards[i].classList.add("main_cards_active")
                setTimeout(function(){
                    lines[i].classList.add("line_active")
                }, 600)
            }
        }
    });