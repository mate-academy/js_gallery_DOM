'use strict';

const list = document.querySelectorAll('.list-item');
const largeImg = document.querySelector('#largeImg');

list.forEach(item => item.querySelector('.list-item__link')
  .addEventListener('click', (e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const url = window.location.href;

    if (current.tagName === 'A') {
      const link = current.getAttribute('href');
      const newSrc = url.slice(0, -1) + link;

      largeImg.setAttribute('src', newSrc);
    }
  }));
