'use strict';

const list = document.querySelectorAll('li');
const galleryImg = document.getElementById('largeImg');

list.forEach(item => {
  const link = item.querySelector('a');
  const img = link.getAttribute('href');

  item.addEventListener('click', (transition) => {
    transition.preventDefault();
    galleryImg.setAttribute('src', `${img}`);
  });
});
