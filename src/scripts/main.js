/* eslint-disable no-shadow */
'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function (event) {
  event.preventDefault();

  const link = event.target.closest('a');

  if (!link || !thumbs.contains(link)) {
    return;
  }

  const largeImgUrl = link.getAttribute('href');

  mainImage.src = largeImgUrl;
});
