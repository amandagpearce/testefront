

let sections = document.querySelectorAll('.half-hero');

//Soma de todos os valores de produtos da seção Power, Batteries & Adapters
(function () {
    sections.forEach(function(el){
        if (el.querySelector('.half-hero-outer-container .text-white').innerText == 'Power, Batteries & Adapters') {
            let totalPrice = 0;
            el.querySelectorAll('[data-testid="featured_module_price"]').forEach(function(priceEl) {
                totalPrice = totalPrice + Number(priceEl.innerText.split('$')[1]); 
            })
            alert('$'+totalPrice.toFixed(2));
        } 
    })
})();

//Add fundo roxo à seção Networking
sections.forEach(function(el){
  if (el.querySelector('.half-hero-outer-container .text-white').innerText == 'Networking') {
    el.querySelector('.half-hero-outer-container .text-centered.gray-light').classList.add('purple');
  }
   
})

//Add fundo verde à seção Networking
sections.forEach(function(el){
  if (el.querySelector('.half-hero-outer-container .text-white').innerText == 'Power, Batteries & Adapters') {
    el.querySelector('.half-hero-outer-container .text-centered.gray-light').classList.add('green');
  }
   
})

//Troca imagens de networking por imagens de Cameras, Photo & Video

//Cria um array com src das imagens de Cameras, Photo & Video
let imgSrcArray = [];
sections.forEach(function(el){
    if (el.querySelector('.half-hero-outer-container .text-white').innerText == 'Cameras, Photo & Video') {
    
      el.querySelectorAll('[data-testid="featured_module_section"] img').forEach(function(imgEl) {
          imgSrcArray.push((imgEl).src);
      })
    } 
  })

  //troca src das imagens pelas contidas no array
  sections.forEach(function(el){
    if (el.querySelector('.half-hero-outer-container .text-white').innerText == 'Networking') {
 
      el.querySelectorAll('[data-testid="featured_module_section"] img').forEach(function(imgEl, i) {
          imgEl.src = imgSrcArray[i];
      })
    } 
  })


  
