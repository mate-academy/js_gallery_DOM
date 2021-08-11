'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

ul.addEventListener('click', function(e) {
  e.preventDefault();

  const isClosest = e.target.closest('.list-item__link');
  const itContains = ul.contains(e.target);

  if (!isClosest || !itContains) {
    return false;
  };

  const srcImage = isClosest.getAttribute('href');

  largeImg.setAttribute('src', srcImage);
});
