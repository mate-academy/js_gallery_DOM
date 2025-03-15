'use strict';

const bigImg = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item__link');
const imgs = document.querySelectorAll('.gallery__thumb');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    links[i].setAttribute('href', '#');
    bigImg.setAttribute('src', getRightImageSrc(imgs[i]));
  });
}

function getRightImageSrc(img) {
  const originalSrc = img.getAttribute('src');
  const originalSrcSpl = originalSrc.split('-thumb');

  return 'images/' + originalSrcSpl[0] + '.png';
}
