'use strict';

document.getElementById('thumbs').addEventListener('click', (ev) => {
  ev.preventDefault();

  const target = ev.target;
  const largeImg = document.getElementById('largeImg');
  let largeImgSrc = '';

  switch (target.tagName.toLowerCase()) {
    case 'img':
      largeImgSrc = target.closest('a').getAttribute('href');
      break;

    case 'a':
      largeImgSrc = target.getAttribute('href');
      break;

    default:
      return;
  }

  largeImg.setAttribute('src', largeImgSrc);
});
