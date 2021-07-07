'use strict';

Array.from(document.querySelectorAll('li')).forEach(li => {
  li.addEventListener('click', (action) => {
    action.preventDefault();
    document.querySelector('#largeImg').src = li.querySelector('a').href;
  });
});
