'use strict';

const largeImg = document.getElementById('largeImg');
const listLinks = document.querySelectorAll('.list-item__link');

listLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const imgSrc = link.getAttribute('href');

    largeImg.setAttribute('src', imgSrc);
  });
});
