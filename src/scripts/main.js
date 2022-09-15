'use strict';

const largeImg = document.querySelector('#largeImg');

const listItem = document.querySelectorAll('.list-item');

for (const el of [...listItem]) {
  el.addEventListener('click', function(e) {
    e.preventDefault();

    const a = el.querySelector('a');

    largeImg.src = a.href;
  });
};
