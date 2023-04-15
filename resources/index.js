const openMenu = document.getElementById('burger');
const closeMenu = document.getElementById('close');
const burgerMenu = document.getElementById('opened-burger-menu');

openMenu.onclick = function() {
  burgerMenu.style.display = 'block';
};

closeMenu.onclick = function() {
  burgerMenu.style.display = 'none';
};