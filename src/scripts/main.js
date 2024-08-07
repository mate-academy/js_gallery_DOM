'use strict';

const galery = document.querySelector('#largeImg');
const listLinks = document.querySelector('#thumbs');

listLinks.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('a');

  galery.setAttribute(
    'src',
    'http://' + window.location.host + link.getAttribute('href'),
  );
});
