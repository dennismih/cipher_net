/*const intro = document.querySelector('.intro');
const img = document.querySelector('.img');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if(intro) intro.style.transform = `translateY(${scrollY * -0.11}px)`;
  if(img) img.style.transform = `translateY(${scrollY * -0.7}px)`;
});*/


const intro = document.querySelector('.intro');
const titoli = document.querySelector('.titoli');

// Offset iniziale (quanto vuoi che titoli sia già sovrapposta)
const initialOffset = -170; // negativo fa salire l'immagine verso l'intro

function applyParallax(scrollY) {
  if(intro) intro.style.transform = `translateY(${scrollY * -0.11}px)`;
  if(titoli) titoli.style.transform = `translateY(${initialOffset + scrollY * -0.7}px)`;
}

// Applica subito il parallax iniziale
applyParallax(0);

window.addEventListener('scroll', () => {
  applyParallax(window.scrollY);
});

//ANIMAZIONE DECODE TEXT

//FINE ANIMAZIONE DECODE TEXT