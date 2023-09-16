'use strict';

const largeImg = document.querySelector('#largeImg');

const listLinks = document.querySelectorAll('.list-item__link');

listLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    largeImg.src = link.href;
  }
  );
});
