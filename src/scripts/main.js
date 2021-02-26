'use strict';

const list = document.querySelector('ul');
const bigImage = document.getElementById('largeImg');

function changeImage(element) {
  element.preventDefault();

  const elementTarget = element.target.closest('a');

  if (!elementTarget || !list.contains(elementTarget)) {
    return;
  }

  bigImage.src = elementTarget.href;
}

list.addEventListener('click', changeImage);
