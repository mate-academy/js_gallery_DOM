'use strict';

document.querySelector('#thumbs').addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('a.list-item__link');

  if (link) {
    document
      .querySelector('#largeImg')
      .setAttribute('src', link.getAttribute('href'));
  }
});
