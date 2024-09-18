'use strict';

const btns = Array.from(document.querySelectorAll('.list-item__link'));

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('#largeImg').src = btn.href;
  });
});
