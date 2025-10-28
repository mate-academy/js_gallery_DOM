'use strict';

const imgContainer = document.querySelector('ul');

imgContainer.addEventListener('click', (eventer) => {
  const largeImg = document.querySelector('#largeImg');
  const smallImg = eventer.target.closest('a');

  eventer.preventDefault();

  if (!smallImg) {
    return;
  }

  largeImg.src = smallImg.href;
});
