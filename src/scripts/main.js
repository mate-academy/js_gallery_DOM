'use strict';

const images = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
images.addEventListener('click', (event) => {
  const li = event.target.closest('li');

  if (!li || !images.contains(li)) {
    return;
  }

  event.preventDefault();

  const liLink = li.querySelector('a');
  const liImage = liLink.getAttribute('href');

  const imgDiv = document.querySelector('.gallery__large-img');

  imgDiv.setAttribute('src', liImage);
});
