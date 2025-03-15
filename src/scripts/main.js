'use strict';

const smallImgCollection = document.querySelectorAll('.gallery__thumb');

smallImgCollection.forEach((elem) => {
  const hrefValue = elem.parentNode.getAttribute('href');

  elem.setAttribute('mydata', hrefValue);
  elem.parentNode.href = '';
});

const gallery = document.querySelector('.gallery');

const largeImgElem = document.querySelector('.gallery__large-img')

gallery.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'IMG') {
    ev.preventDefault();
    ev.stopPropagation();

    const route = ev.target.getAttribute('mydata');

    if (route) {
      largeImgElem.setAttribute('src', route);
    }
  }
});
