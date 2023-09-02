'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsList.addEventListener('click', function(e) {
  const target = e.target.closest('.list-item__link');

  if (target) {
    e.preventDefault();

    const imgSrc = target.getAttribute('href');

    largeImg.setAttribute('src', imgSrc);
  }
});
