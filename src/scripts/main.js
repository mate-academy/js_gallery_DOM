'use strict';

const list = Array.from(document.querySelectorAll('.list-item'));
const largeImg = document.querySelector('#largeImg');

list.forEach((li) => {
  const a = li.querySelector('a');

  a.addEventListener('click', (e) => {
    e.preventDefault();

    const path = a.href;

    largeImg.src = path;
  });
});
