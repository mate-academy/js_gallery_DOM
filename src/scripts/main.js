'use strict';

const large = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', e => {
  e.preventDefault();

  const target = e.target.tagName.toLowerCase();
  const clickedArea = target === 'img' ? e.target.parentNode : e.target;

  if (clickedArea.classList.contains('list-item__link')) {
    const imageSrc = clickedArea.getAttribute('href');

    large.setAttribute('src', imageSrc);
  }
});
