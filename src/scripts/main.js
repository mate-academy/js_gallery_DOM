'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const imgGallery = document.querySelector('.gallery__large-img');
  const links = document.querySelectorAll('.gallery ul li a');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      if (link.href) {
        imgGallery.src = link.href;
      }
    });
  });
});
