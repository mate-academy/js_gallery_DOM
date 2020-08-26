'use strict';

window.addEventListener('load', () => {
  const list = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  list.addEventListener('click', (event) => {
    event.preventDefault();

    const elem = event.target.closest('.list-item__link');

    largeImg.src = elem.href;
  });
});
