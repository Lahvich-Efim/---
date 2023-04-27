let menu1 = document.getElementById('burger');
let menu2 = document.querySelector('.menu');
let menu3 = document.querySelector('.effect');
    menu1.onclick = function() {
      menu1.classList.toggle('open-menu');
      menu2.classList.toggle('open-menu');
      menu3.classList.toggle('open-menu');
    }