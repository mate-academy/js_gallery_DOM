'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  if (!largeImg || !thumbs) return;

  // Pobierz wszystkie linki miniaturek
  const thumbLinks = thumbs.querySelectorAll('a');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    // Znajdź najbliższy <a>
    const target = e.target.closest('a');
    if (!target) return;

    const newSrc = target.getAttribute('href');
    if (newSrc) {
      // Zmień duży obrazek
      largeImg.src = newSrc;

      // Usuń klasę 'active' ze wszystkich miniaturek
      thumbLinks.forEach(link => link.classList.remove('active'));

      // Dodaj klasę 'active' do klikniętej miniaturki
      target.classList.add('active');
    }
  });
});
