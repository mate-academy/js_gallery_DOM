/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-shadow, no-undef
thumbs.onclick = function (event) {
  if (event.target.tagName === 'IMG') {
    largeImg.setAttribute('src', event.target.closest('a').href);
    largeImg.title = event.target.parentNode.title;

    event.preventDefault();
  }
};
