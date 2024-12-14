'use strict';

function gallery() {
  const list = document.querySelector('#thumbs');
  const image = document.querySelector('#largeImg');

  list.addEventListener('click', (thisEvent) => {
    thisEvent.preventDefault();

    const link = thisEvent.target.closest('a').getAttribute('href');

    image.setAttribute('src', link);
  });
}

gallery();
