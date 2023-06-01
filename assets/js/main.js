const cardsContainer = document.querySelector('.div-cardsContainer');
const main = document.querySelector('.main-cardsContainer');
const buttonPortal = document.querySelector('.button-portal');
const cards = document.getElementsByClassName('div-card');
const API = 'https://rickandmortyapi.com/api/character';

buttonPortal.addEventListener('click', () => {
    
    cardsContainer.classList.toggle('inactive');
    main.classList.toggle('main');
});

async function fetchData(urlAPI){
    const response = await fetch(urlAPI);
    const data = await response.json();
    const {results} = data;
    return results;
}


(async () => {
    const results = await fetchData(API);
    results.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('div-card');
         const imagen = document.createElement('img');
        imagen.setAttribute('src',`${element.image}`)
        const nombre = document.createElement('p');
        nombre.innerText = `${element.name}`;
        card.append(imagen,nombre);
        cardsContainer.append(card);
    });
})();



