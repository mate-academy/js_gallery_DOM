'use strict';

const mainImg = document.querySelector('#largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const bigImgSrc = link.getAttribute('href');

  mainImg.setAttribute('src', bigImgSrc);
});
