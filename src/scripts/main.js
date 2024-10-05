'use strict';

document.querySelector('#thumbs').addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('a.list-item__link');

  if (link) {
    const fullUrl = new URL(link.getAttribute('href'), window.location.href);

    document.querySelector('#largeImg').setAttribute('src', fullUrl);
  }
});
