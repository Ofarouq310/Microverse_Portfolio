const hamburger = document.querySelector('#hamburger');
const mbMenu = document.querySelector('.mb_menu');
const cross = document.querySelector('#x_icon');
const menuItems = document.getElementsByClassName('menu_list_items');

hamburger.addEventListener('click', () => {
  mbMenu.style.display = 'block';
});

cross.addEventListener('click', () => {
  mbMenu.style.display = 'none';
});

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    mbMenu.style.display = 'none';
  });
}

// dynamic preview-cards
const cards = [{
  title: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 0,

},
{
  title: 'Art Printing Data 1',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 1,

},
{
  title: 'Art Printing Data 2',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 2,
},
{
  title: 'Art Printing Data 3',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 3,

},
{
  title: 'Art Printing Data 4',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 4,
},
{
  title: 'Art Printing Data 5',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 5,
},
{
  title: 'Art Printing Data 6',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'Sources/Desktop/Snapshoot Portfolio.png',
  tech1: 'html',
  tech2: 'css',
  tech3: 'bootstrap',
  btnText: 'See card',
  id: 6,
},
];

function displayCards() {
  let result = '';

  cards.filter((card) => card.id > 0).forEach((card) => {
    result += `
  
   <div class="project3">
   <h1 id="project3_header">${card.title}</h1>
   <p class="project3_description">${card.description}</p>
   
   <ul class="projects_tag_box">
     <li class = "projects_box">${card.tech1}</li>
     <li class = "projects_box">${card.tech2}</li>
     <li class = "projects_box">${card.tech3}</li>
   </ul>

   <button type="button" class="project3_button button_interactions" >${card.btnText}</button>
 </div>`;
  });

  document.querySelector('.parent_grid2').innerHTML = result;
}

displayCards();
// Opening the window
const btn = document.getElementsByClassName('project3_button');
const popUpWrapper = document.getElementById('popup-wrapper');
// let res = '';
cards.forEach((card) => {
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      if (i === ((card.id))) {
        popUpWrapper.style.display = 'block';
        const res = `<div class="content-card-wrap">
         <div class="content-card">
          <div class="close-button card-x"><img src="Sources/Desktop/Icon - Cancel.png" alt="X"></div>
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
                  <button class="card-button">See Live<img src="Sources/Desktop/Frame.png" alt="" class="card-i"></button>
                </a>
                <a class="card-link">
                  <button class="card-button">See Source<img src="Sources/Desktop/Icon-see live.png" alt=""></button>
                </a>
              </div>
            </div>
         </div>
        </div>
        </div>`;

        popUpWrapper.innerHTML = res;

        // close the card
        const cardX = document.getElementsByClassName('card-x');
        for (let j = 0; j < cardX.length; j += 1) {
          cardX[j].addEventListener('click', () => {
            popUpWrapper.style.display = 'none';
          });
        }
      }
    });
  }
});
