'use strict';

const largeImg = document.querySelector('#largeImg');
const baseURL = window.location.origin;

const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');
  const imgLink = link.getAttribute('href');

  largeImg.setAttribute('src', `${baseURL}${imgLink}`);
});
