function toggleMenuBox() {
  if (document.getElementById('menu-box').style.width === '200px') {
    document.getElementById('menu-box').style.width = '0px';
  } else {
    document.getElementById('menu-box').style.width = '200px';
  }
};

function toogleMenuBackground() {
  if (document.getElementById('menu-background').style.display === 'block') {
    document.getElementById('menu-background').style.display = 'none';
  } else {
    document.getElementById('menu-background').style.display = 'block';
  }
};

function openNav() {
  toogleMenuBackground();
  setTimeout(toggleMenuBox, 1);
};

function closeNav() {
  toggleMenuBox();
  setTimeout(toogleMenuBackground, 800);
};