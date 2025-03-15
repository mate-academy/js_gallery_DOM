'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (clickFoto) => {
  clickFoto.preventDefault();
});

const clickHandler = (e) => {
  const li = e.target.closest('.list-item');

  const linkA = li.querySelector('.list-item__link');
  const largeImg = document.getElementById('largeImg');

  if (linkA && largeImg) {
    largeImg.src = linkA.href;
  }
};

gallery.addEventListener('click', clickHandler, { capture: true });
