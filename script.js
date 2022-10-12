/* eslint-disable max-len */
const hamburger = document.querySelector('#hamburger');
const cross = document.querySelector('.close-button');
const navWBtn = document.getElementsByClassName('nav-w-btn');

hamburger.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = 0;
});

cross.addEventListener('click', () => {
  document.getElementById('nav-wrap').style.left = '100%';
});

for (let i = 0; i < navWBtn.length; i += 1) {
  navWBtn[i].addEventListener('click', () => {
    document.getElementById('nav-wrap').style.left = '100%';
  });
}

// dynamic preview-cards
const cards = [{
  title: 'Art Printing Data2',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: './Images/card-img.svg',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 0,

},
{
  title: 'Art Printing Data3',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: './Images/card-img.svg',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 1,
},
{
  title: 'Art Printing Data4',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: './Images/card-img.svg',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 2,

},
{
  title: 'Art Printing Data5',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: './Images/card-img.svg',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 3,
},
{
  title: 'Art Printing Data6',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: './Images/card-img.svg',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 4,
},
{
  title: 'Art Printing Data7',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: './Images/card-img.svg',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 5,
},
];

function displayCards() {
  let result = '';

  cards.forEach((card) => {
    result += `<div class="simple-post">
      <div class="sp-content">
        <div class="sp-h-wrapper">
          <h3>${card.title}</h3>
        </div>
        <p>${card.description}</p>
        <ul class="sp-lang-wrapper"> 
          <li>${card.tech1}</li> 
          <li>${card.tech2}</li> 
          <li>${card.tech3}</li>
        </ul>
      </div>
      <a class="sp-link">
      <button class="sp-button card-btn-open">${card.btnText}</button>
      </a>
    </div>`;
  });

  document.getElementById('simple-posts-wrapper').innerHTML = result;
}

displayCards();

// Opening the window 
const btn = document.getElementsByClassName('card-btn-open');
let popUpWrapper = document.getElementById('pop_up_wrapper');
let res = '';
cards.forEach((card) => {
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    if(i == card.id){
      popUpWrapper.style.display = 'block';
      res += 
        `<div class="content-card-wrap">
         <div class="content-card">
          <div class="close-button card-x"><img src="./Images/X-d.svg" alt="X"></div>
          <div class="cc-h-wrap">
            <h2 class="card-h">${card.title}</h2>
            <ul class="card-lang-wrapper">
              <li>${card.tech1}</li>
              <li>${card.tech2}</li>
              <li>${card.tech3}</li>
            </ul>
          </div>
          <div class="card-content">
            <div class="card-img-w">
              <img src="${card.img}" alt="card-preview" class="card-img">
            </div>
            <div class="card-cb-wrap">
              <p class="card-p">
              ${card.description}
              </p>
              <div class="card-b-wrap">
                <a class="card-link">
                  <button class="card-button">See Live<img src="./Images/card-icon.svg" alt="" class="card-i"></button>
                </a>
                <a class="card-link">
                  <button class="card-button">See Source<img src="./Images/github-w.svg" alt=""></button>
                </a>
              </div>
            </div>
         </div>
        </div>
        </div>`;

       popUpWrapper.innerHTML = res;


    // close the card

    const cardX = document.getElementsByClassName('card-x');
     for(let j = 0; j < cardX.length; j += 1){
       cardX[j].addEventListener('click', () => {
       popUpWrapper.style.display = 'none';
});
}

    } 
  });
}

});
