'use strict';

const links = Array.from(document.querySelectorAll('.list-item__link'));
const mainImg = document.querySelector('#largeImg');

links.forEach(link => {
  link.addEventListener('click', (events) => {
    mainImg.src = link.href;
    events.preventDefault();
  });
});
