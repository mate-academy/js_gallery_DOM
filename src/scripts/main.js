const largeImgEl = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const linkEl = e.target.closest('.list-item__link');

  if (thumbs.contains(linkEl)) {
    const newSrc = linkEl.getAttribute('href');

    largeImgEl.setAttribute('src', new URL(newSrc, window.location).href);
  }
 
});
