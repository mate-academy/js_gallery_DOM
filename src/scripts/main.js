'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const largeImg = document.getElementById('largeImg');
  const listOfImgs = document.querySelectorAll('.list-item');

  listOfImgs.forEach(item => item.addEventListener('click', handleImgClick));

  function handleImgClick(e) {
    e.preventDefault();

    const newImgSrc = e.currentTarget.querySelector('a').getAttribute('href');

    largeImg.setAttribute('src', newImgSrc);
  }
});
