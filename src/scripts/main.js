'use strict';

const ul = document.querySelector('ul');

ul.addEventListener('click', (sm) => {
  const largeImg = document.getElementById('largeImg');

  if (sm.target.tagName === 'IMG') {
    largeImg.src = sm.target.parentElement.href;
    event.preventDefault();
  }

  if (sm.target.tagName === 'A') {
    largeImg.src = sm.target.href;
    event.preventDefault();
  }
});
