'use strict';

const galleryElement = document.querySelector('.gallery');

const galleryLinks = galleryElement.querySelectorAll('a');
const largeImg = document.querySelector('#largeImg');

galleryLinks.forEach((link) => {
  link.addEventListener('click', function (evnt) {
    evnt.preventDefault();
    largeImg.src = this.href;
  });
});
