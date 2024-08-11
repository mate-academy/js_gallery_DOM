'use strict';

const galery = document.querySelector('#largeImg');
const listLinks = document.querySelector('#thumbs');

listLinks.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('a');
  const href = link.getAttribute('href');

  galery.setAttribute('src', document.URL + href.slice(1, href.length));
});
