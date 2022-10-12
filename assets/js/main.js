// inserisco le immagini in un array
const slides = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]

// seleziono l'elemento della DOM dove mettere le immagini
let imgElement = document.querySelector('.slides');


// definisco una variabile per l'immagine attiva
let activeSlide = 0;

// ciclo for per la selezione delle immagini
for (let i = 0; i < slides.length; i++) {
    const imgPath = slides[i];
    const activeImg = `<img class="${i === activeSlide ? 'active' : ''}" src="${imgPath}" alt"">`;
    imgElement.insertAdjacentHTML('beforeend', activeImg);
}

// seleziono i bottoni di controllo
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// aggiungo un EventListener al pulsante next
nextBtn.addEventListener('click', function() {
    console.log('next');

    // cerco l'immagine attiva
    const slidesImg = document.querySelectorAll('.slides > img');
    const currentSlide = slidesImg[activeSlide];
    
    // tolgo la classe active
    currentSlide.classList.remove('active');

    // incremento
    activeSlide++;

    // seleziono la seconda immagine
    const nextSlide = slidesImg[activeSlide];

    // applico la classe active
    nextSlide.classList.add('active');
}) 

// aggiungo un EventListener al pulsante prev
prevBtn.addEventListener('click', function() {
    console.log('prev');

    // cerco l'immagine attiva
    const slidesImg = document.querySelectorAll('.slides > img');
    const currentSlide = slidesImg[activeSlide];
    
    // tolgo la classe active
    currentSlide.classList.remove('active');

    // incremento
    activeSlide--;

    // seleziono la seconda immagine
    const nextSlide = slidesImg[activeSlide];

    // applico la classe active
    nextSlide.classList.add('active');
})  