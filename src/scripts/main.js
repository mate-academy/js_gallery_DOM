'use strict';

const list = document.querySelector('#thumbs');
const links = [...list.querySelectorAll('a')];
const largeImg = document.querySelector('#largeImg');

links.forEach(el => {
  const href = el.href;

  el.setAttribute('data-link-img-large', href);
  el.querySelector('img').setAttribute('data-link-img-large', href);
  el.removeAttribute('href');
});

list.addEventListener('click', (myEvent) => {
  const item = myEvent.target;
  const clicedImgLink = item.getAttribute('data-link-img-large');

  largeImg.setAttribute('src', clicedImgLink);
});
