'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsImg = document.getElementById('thumbs');

thumbsImg.addEventListener('click', function(event) {
  event.preventDefault();

  const targetElement
    = event.target.tagName === 'IMG'
      ? event.target.parentNode
      : event.target;

  if (targetElement.classList.contains('list-item__link')) {
    const imgHref = targetElement.getAttribute('href');
    const imgTitle = targetElement.getAttribute('title');

    largeImg.src = imgHref;
    largeImg.alt = imgTitle;
  }
});
