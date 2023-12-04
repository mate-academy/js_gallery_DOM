'use strict';

const baseUrl = window.location.href;

document.addEventListener('DOMContentLoaded', function() {
  const largeImg = document.querySelector('#largeImg');
  const thumbsList = document.querySelectorAll('.list-item');

  thumbsList.forEach((item) => {
    item.addEventListener('click', handleThumbnailClick);
  });

  function handleThumbnailClick(e) {
    e.preventDefault();

    const newImgSrc = e.currentTarget.querySelector('a').getAttribute('href');

    largeImg.setAttribute('src', baseUrl.slice(0, -1) + newImgSrc);
  }
});
