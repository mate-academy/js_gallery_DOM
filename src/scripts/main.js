'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

if (thumbs && largeImg) {
  thumbs.addEventListener('click', function (e) {
    const link = e.target.closest('a');

    // Only act for anchors inside the thumbs list
    if (!link || !thumbs.contains(link)) {
      return;
    }

    // Prevent navigation for valid thumbnail clicks
    e.preventDefault();

    // New src from anchor href
    const newSrc = link.href;

    // alt from thumbnail <img>, fallback to link.title or empty string
    const thumbImg = link.querySelector('img');
    const newAlt = thumbImg && thumbImg.alt ? thumbImg.alt : link.title || '';

    largeImg.src = newSrc;
    largeImg.alt = newAlt;
  });
}
