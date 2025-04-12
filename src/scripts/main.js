'use strict';

const showElement = document.querySelector('.gallery');

const elScroll = (e) => {
  e.preventDefault();

  const listItem = e.target.closest('a');

  if (listItem && listItem.href) {
    const largeTarget = document.querySelector('.gallery__large-img');

    largeTarget.src = listItem.href;
  }
};

showElement.addEventListener('click', elScroll);
