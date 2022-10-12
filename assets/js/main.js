// inserisco le immagini in un array
const slides = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]

// seleziono l'elemento della DOM dove mettere le immagini
const imgElement = document.querySelector('.slides');

// seleziono i bottoni
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');