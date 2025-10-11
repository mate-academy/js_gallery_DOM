'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

if (thumbs && largeImg) {
  thumbs.addEventListener('click', function (e) {
    const target = e.target;

    // guard if target isn't an Element with closest()
    if (!target || typeof target.closest !== 'function') {
      return;
    }

    const link = target.closest('a');

    // only proceed for anchors inside thumbs
    if (!link || !thumbs.contains(link)) {
      return;
    }

    // prevent navigation for this valid thumbnail click
    e.preventDefault();

    const newSrc = link.getAttribute('href');
    const thumbImg = link.querySelector('img');
    const newAlt = thumbImg && thumbImg.alt ? thumbImg.alt : link.title || '';

    largeImg.src = newSrc;
    largeImg.alt = newAlt;
  });
}
