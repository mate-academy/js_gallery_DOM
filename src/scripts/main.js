'use strict';


let bigImg = document.querySelector('.gallery__large-img');


let imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (event) => {

  event.preventDefault();
  let closest = event.target.closest('.list-item');
  bigImg.attributes[1].value = closest.children[0].attributes.href.value;

});



