'use strict';

const largeImg = document.getElementById('largeImg');

document.querySelectorAll('.list-item').forEach((item) => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
      largeImg.src = event.target.src;
    }

    if (event.target.tagName === 'A') {
      largeImg.src = event.target.href;
    }
  });
});
