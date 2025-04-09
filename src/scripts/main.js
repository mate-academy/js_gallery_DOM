'use strict';

function clickEvent(element) {
  element.preventDefault();

  const targetElement = element.target.closest('a');

  const largeImgElement = document.querySelector('#largeImg');

  largeImgElement.src = targetElement.href;
}

const documentElement = document.querySelector('.gallery');

documentElement.addEventListener('click', (element) => clickEvent(element));
