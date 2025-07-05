'use strict';

document.querySelector('#thumbs').addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link && document.querySelector('#thumbs').contains(link)) {
    e.preventDefault();
    document.querySelector('#largeImg').src = link.href;
  }
});
