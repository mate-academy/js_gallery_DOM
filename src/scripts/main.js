'use strict';

const showElements = document.querySelector('.gallery');

const moverElement = (element) => {
  element.preventDefault();

  const listItem = element.target.closest('a');

  if (listItem && listItem.href) {
    const prevElement = document.querySelector('.gallery__large-img');

    prevElement.src = listItem.href;
  }
};

showElements.addEventListener('click', moverElement);
