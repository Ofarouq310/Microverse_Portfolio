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