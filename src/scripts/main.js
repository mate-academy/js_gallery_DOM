'use strict';

// debugger;

const imgLinks = document.querySelectorAll('.list-item__link');
const mainImg = document.querySelector('#largeImg');

imgLinks.forEach((imgLink) => {
  imgLink.addEventListener('click', (eve) => {
    eve.preventDefault();
    mainImg.src = imgLink.href;
  });
});
