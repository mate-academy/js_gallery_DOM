'use strict';

const container = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
container.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target.closest('.list-item__link');

  if (!target || !container.contains(target)) {
    return;
  }

  document.getElementById('largeImg').src = target.href;
});
