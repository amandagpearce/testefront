

let sections = document.querySelectorAll('.half-hero');

// IIFE that alerts the total sum of products in Power, Batteries & Adapters
(function () {
    sections.forEach((el) => {
        if (el.querySelector('.half-hero-outer-container .text-white').innerText == 'Power, Batteries & Adapters') {
            
            let totalPrice = 0;
            
            el.querySelectorAll('[data-testid="featured_module_price"]').forEach((priceEl) => 
                totalPrice = totalPrice + Number(priceEl.innerText.split('$')[1]))
            
            alert('$'+totalPrice.toFixed(2));
        } 
    })
})();

changeBgColor = (sections, parentElTitle, bg) => {
  sections.forEach((el) => {
    if (el.querySelector('.half-hero-outer-container .text-white').innerText == parentElTitle) {
      el.querySelector('.half-hero-outer-container .text-centered.gray-light').classList.add(bg);
    }
  })
}
// Purple background Networking section & Green background Power, Batteries & Adapters section
changeBgColor(sections, 'Networking', 'purple'); 
changeBgColor(sections, 'Power, Batteries & Adapters', 'green');

// Creates array img srcs from Cameras, Photo & Video
swapSrcs = (sections, parentElTitle1, parentElTitle2) => {
  let imgSrcArray = [];
  sections.forEach((el) => {
    if(el.querySelector('.half-hero-outer-container .text-white').innerText == parentElTitle1){
      el.querySelectorAll('[data-testid="featured_module_section"] img').forEach((imgEl) => 
        imgSrcArray.push((imgEl).src))
    }
    if( imgSrcArray.length > 3) {
      sections.forEach((el) => {
        if (el.querySelector('.half-hero-outer-container .text-white').innerText == parentElTitle2) {
          el.querySelectorAll('[data-testid="featured_module_section"] img').forEach(function(imgEl, i) {
              imgEl.src = imgSrcArray[i];
          })
        } 
      })
    }
  })
}

swapSrcs(sections, 'Cameras, Photo & Video','Networking');

  
