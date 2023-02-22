'use strict';

const list = document.querySelector('#thumbs');
const links = [...list.querySelectorAll('a')];
const largeImg = document.querySelector('#largeImg');

links.forEach(el => {
  el.removeAttribute('href');
})

list.addEventListener('click', (event) => {
  const item = event.target;
  const clicedImgLink = item.getAttribute('src');

  largeImg.setAttribute('src', clicedImgLink)
})
