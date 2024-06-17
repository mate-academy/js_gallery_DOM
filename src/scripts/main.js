'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs = document.querySelector('#thumbs');
  const mainImg = document.querySelector('#largeImg');

  thumbs.addEventListener('click', function (e) {
    e.preventDefault();

    let target = e.target;

    // make sure we target link tag
    if (e.target.tagName === 'IMG') {
      target = target.parentNode;
    }

    // change src attribute for main image
    mainImg.setAttribute('src', target.getAttribute('href'));
  });
});
