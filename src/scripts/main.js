'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementsByClassName('list-item');
const links = document.getElementsByClassName('list-item__link');

for (let i = 0; i < list.length; i++) {
  [...list][i].addEventListener('click', (li) => {
    li.preventDefault();

    largeImg.setAttribute('src',
      `http://localhost:8080${[...links][i].getAttribute('href')}`
        .replace(/\\/, '/'));
  });
};
