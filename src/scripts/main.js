'use strict';

const gallery = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', changeImg);

function changeImg(e) {
  e.preventDefault();

  let target = e.target;

  if (target.tagName !== 'IMG') {
    if (target.closest('li')) {
      target = target.closest('li').querySelector('a img');
    } else {
      return;
    }
  }

  const newSrc = target.closest('a').getAttribute('href');

  gallery.setAttribute('src', newSrc);
}
