'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const imgGallery = document.getElementById('largeImg');
  const links = document.querySelectorAll('.gallery ul li a');

  links.forEach((link) => {
    if (link) {
      link.addEventListener('click', (e) => {
        if (link.hasAttribute('href')) {
          const largeImg = link.getAttribute('href');

          imgGallery.setAttribute('src', largeImg);
          e.preventDefault();
        }
      });
    }
  });
});
