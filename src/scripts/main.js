'use strict';

const listItem = Array.from(document.querySelectorAll('.list-item'));

listItem.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const li = e.currentTarget;
    const href = li.querySelector('a').getAttribute('href');

    const mainImg = document.querySelector('#largeImg');

    mainImg.setAttribute('src', href);
  });
});
